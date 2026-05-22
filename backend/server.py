from fastapi import FastAPI, APIRouter, BackgroundTasks
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
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
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    smtp_host = os.environ.get('SMTP_HOST', 'mail.privateemail.com')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    notify_email = os.environ.get('NOTIFY_EMAIL', smtp_user)

    if not smtp_user or not smtp_password:
        logger.warning("Email not configured (SMTP_USER/SMTP_PASSWORD missing), skipping notification")
        return

    try:
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = notify_email
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))

        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, notify_email, msg.as_string())

        logger.info(f"Email sent: {subject}")
    except Exception as e:
        logger.error(f"Failed to send email: {e}")


# --- Routes ---

@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.get("/test-email")
async def test_email():
    smtp_user = os.environ.get('SMTP_USER')
    smtp_password = os.environ.get('SMTP_PASSWORD')
    smtp_host = os.environ.get('SMTP_HOST', 'mail.privateemail.com')
    smtp_port = int(os.environ.get('SMTP_PORT', '465'))
    notify_email = os.environ.get('NOTIFY_EMAIL', smtp_user)

    if not smtp_user or not smtp_password:
        return {"status": "error", "message": "SMTP_USER or SMTP_PASSWORD not set in environment"}

    try:
        msg = MIMEMultipart()
        msg['From'] = smtp_user
        msg['To'] = notify_email
        msg['Subject'] = "RCI Kent - Email Test"
        msg.attach(MIMEText("This is a test email from your RCI Kent website backend.", 'plain'))

        with smtplib.SMTP_SSL(smtp_host, smtp_port) as server:
            server.login(smtp_user, smtp_password)
            server.sendmail(smtp_user, notify_email, msg.as_string())

        return {"status": "success", "message": f"Test email sent to {notify_email}"}
    except smtplib.SMTPAuthenticationError as e:
        return {"status": "error", "type": "auth", "message": f"Authentication failed: {str(e)}"}
    except smtplib.SMTPConnectError as e:
        return {"status": "error", "type": "connect", "message": f"Could not connect to {smtp_host}:{smtp_port}: {str(e)}"}
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
