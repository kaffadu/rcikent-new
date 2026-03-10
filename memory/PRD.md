# Royalhouse Chapel Kent Mission - Website PRD

## Problem Statement
Build a church website for Royalhouse Chapel Kent Mission using colors and branding from their official logo. The website should follow the content and structure specified in the user's provided PDF document.

## User Information & Context
- **Church Name**: Royalhouse Chapel Kent Mission
- **Tagline**: "Touching Our Generation with the Power of God"
- **Brand Colors**: Royal Blue (#1e40af / blue-700), White, Light Blue accents
- **Logo**: Crown with dove on royal blue background
- **Location**: Northfleet Technology College, Colyer Road, Northfleet, Gravesend DA11 8BG
- **Contact**: rcikentmission@gmail.com
- **Social Media**: Instagram (@rcikent), Facebook (rcikent), TikTok (@rcikent)

## Core Requirements

### Design Requirements
- Modern, conversion-optimized church website
- Royal blue and white color scheme (matching official logo)
- Video hero banner with blue overlay
- Responsive design for all devices
- Mobile hamburger menu
- Smooth animations and micro-interactions

### Functional Requirements
1. **Navigation**: Fixed header with logo, links to sections, "Connect With Us" CTA
2. **Hero Section**: Video background with church name, tagline, and CTA buttons
3. **Who We Are**: Church description, Mission & Vision cards
4. **New Here?**: Welcome content for first-time visitors
5. **Plan Your Visit**: Service times, location with directions, what to expect
6. **Support Us**: Give, Volunteer, Pray cards with bank details link
7. **Connect Form**: Contact form for visitors
8. **Prayer Request Form**: Submit prayer requests
9. **Footer**: Social links, quick links, location

## What's Been Implemented

### Latest Update - December 2025
**Completed**:
- Video hero banner with royal blue overlay
- Single-page scrolling website with all sections
- Navigation: Home, Who We Are, New Here?, Plan Your Visit, Support Us, Connect With Us
- Mobile responsive hamburger menu
- "Who We Are" section with Mission & Vision cards
- "New Here?" section with welcoming content
- "Plan Your Visit" with service times, location, and "What to Expect" cards
- "Support Us" section with Give, Volunteer, Pray options
- "Connect With Us" form (frontend-only)
- "Prayer Request" form (frontend-only)
- Footer with social media links
- Give page with bank details (/give route)
- Cleaned up orphaned page components (removed Gallery.jsx, Home.jsx, HomeFinal.jsx, HomeModern.jsx)

**Technologies**:
- React 19 with React Router
- Tailwind CSS for styling
- Shadcn/UI components
- Lucide React icons
- Sonner for toast notifications

## Prioritized Backlog

### P0 Features (High Priority)
1. **Backend Development**
   - MongoDB models for Prayer Requests and Connect submissions
   - POST /api/prayer-requests endpoint
   - POST /api/connect endpoint
   - Integration with frontend forms

### P1 Features (Medium Priority)
1. **Email Notifications**
   - Send notifications when forms are submitted
2. **Admin Dashboard**
   - View submitted prayer requests
   - View connect form submissions

### P2 Features (Nice to Have)
1. **Content Management**
   - Admin ability to update service times
   - Event management
2. **Online Giving Integration**
   - Stripe integration for donations

## Next Tasks
1. Implement backend for "Connect With Us" form
2. Implement backend for "Prayer Request" form
3. Test end-to-end form functionality

## File Structure
```
/app/frontend/src/pages/
├── HomeUpdated.jsx (Main homepage - active)
└── Give.jsx (Bank details page)
```

## Notes
- All forms currently frontend-only (toast notifications only)
- Gallery feature was removed per user request
- "Watch" section was removed per user request
- Video hero banner using user-provided video
