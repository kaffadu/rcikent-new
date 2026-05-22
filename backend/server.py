from fastapi import FastAPI, APIRouter, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import requests
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# --- Models ---

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class PrayerRequestCreate(BaseModel):
    name: str
    email: str
    request: str

class ConnectFormCreate(BaseModel):
    name: str
    email: str
    phone: Optional[str] = ""
    message: str


# --- Email helper ---

def send_email(subject: str, body: str):
    api_key = os.environ.get('RESEND_API_KEY')
    notify_email = os.environ.get('NOTIFY_EMAIL', 'info@premierhubconsult.com')

    if not api_key:
        logger.warning("RESEND_API_KEY not set, skipping email notification")
        return

    try:
        response = requests.post(
            'https://api.resend.com/emails',
            headers={
                'Authorization': f'Bearer {api_key}',
                'Content-Type': 'application/json',
            },
            json={
                'from': 'RCI Kent Website <onboarding@resend.dev>',
                'to': [notify_email],
                'subject': subject,
                'text': body,
            },
            timeout=10
        )
        response.raise_for_status()
        logger.info(f"Email sent via Resend: {subject}")
    except Exception as e:
        logger.error(f"Failed to send email via Resend: {e}")


# --- Routes ---

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.get("/test-email")
async def test_email():
    api_key = os.environ.get('RESEND_API_KEY')
    notify_email = os.environ.get('NOTIFY_EMAIL', 'info@premierhubconsult.com')

    if not api_key:
        return {"status": "error", "message": "RESEND_API_KEY not set in environment"}

    try:
        response = requests.post(
            'https://api.resend.com/emails',
            headers={
                'Authorization': f'Bearer {api_key}',
                'Content-Type': 'application/json',
            },
            json={
                'from': 'RCI Kent Website <onboarding@resend.dev>',
                'to': [notify_email],
                'subject': 'RCI Kent - Email Test',
                'text': 'This is a test email from your RCI Kent website backend.',
            },
            timeout=10
        )
        response.raise_for_status()
        return {"status": "success", "message": f"Test email sent to {notify_email}"}
    except requests.HTTPError as e:
        return {"status": "error", "type": "http", "message": str(e), "detail": response.text}
    except Exception as e:
        return {"status": "error", "type": type(e).__name__, "message": str(e)}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/prayer-request", status_code=201)
async def submit_prayer_request(input: PrayerRequestCreate, background_tasks: BackgroundTasks):
    doc = {
        "id": str(uuid.uuid4()),
        "name": input.name,
        "email": input.email,
        "request": input.request,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }
    await db.prayer_requests.insert_one(doc)

    background_tasks.add_task(
        send_email,
        subject=f"New Prayer Request from {input.name}",
        body=(
            f"Name: {input.name}\n"
            f"Email: {input.email}\n\n"
            f"Prayer Request:\n{input.request}"
        )
    )

    return {"message": "Prayer request submitted successfully"}

@api_router.post("/connect", status_code=201)
async def submit_connect_form(input: ConnectFormCreate, background_tasks: BackgroundTasks):
    doc = {
        "id": str(uuid.uuid4()),
        "name": input.name,
        "email": input.email,
        "phone": input.phone,
        "message": input.message,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }
    await db.connect_forms.insert_one(doc)

    background_tasks.add_task(
        send_email,
        subject=f"New Connection Request from {input.name}",
        body=(
            f"Name: {input.name}\n"
            f"Email: {input.email}\n"
            f"Phone: {input.phone or 'Not provided'}\n\n"
            f"Message:\n{input.message}"
        )
    )

    return {"message": "Message sent successfully"}


# --- App setup ---

app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
