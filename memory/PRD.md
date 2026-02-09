# Royalhouse Chapel Kent Mission - Website PRD

## Problem Statement
Build a church website for Royalhouse Chapel Kent Mission using colors and content from their existing Linktree and Canva site.

## User Information & Context
- **Church Name**: Royalhouse Chapel Kent Mission
- **Tagline**: "We are a Christ-centered, Bible-believing church committed to worship, discipleship, and community impact."
- **Mission**: Touching our generation with the power of God
- **Brand Colors**: Warm amber/bronze tones (Beige, Black, Bronze - Classic, warm, welcoming style)
- **Location**: Northfleet Technology College, Colyer Rd, Northfleet, Gravesend DA11 8BG
- **Contact**: rcikentmission@gmail.com
- **Social Media**: Instagram (@rcikent), Facebook (rcikent), TikTok (@rcikent)

## Core Requirements (Static)

### Design Requirements
- Modern, conversion-optimized church website
- Warm amber/bronze color scheme (matching existing branding)
- Agency-quality design ($20,000+ standard)
- Responsive design for all devices
- Smooth animations and micro-interactions
- Inter font family for professional typography

### Functional Requirements
1. **Navigation**: Fixed header with smooth scroll navigation
2. **Hero Section**: Welcome message with CTA buttons
3. **About Section**: Three key values (Christ-Centered, Bible-Believing, Community Impact)
4. **Mission & Vision Section**: Church mission and three-point vision
5. **Journey CTA Section**: Compelling call-to-action for new visitors
6. **Prayer Request Form**: Submit prayer requests with name, email, and message
7. **Connect Form**: Contact form for new visitors (name, email, phone, message)
8. **Footer**: Church information, location, contact details, social media links
9. **Toast Notifications**: User feedback for form submissions

## What's Been Implemented

### Phase 1 - Frontend with Mock Data (December 2025)
**Completed**: 
- ✅ Single-page church website with all sections
- ✅ Fixed navigation header with smooth scroll
- ✅ Hero section with amber gradient background
- ✅ About section with three feature cards
- ✅ Mission & Vision cards with icon indicators
- ✅ "Start Your Journey" CTA section with full-width amber gradient
- ✅ Prayer Request form (frontend only, using browser state)
- ✅ Connect With Us form (frontend only, using browser state)
- ✅ Professional footer with location and social media links
- ✅ Toast notifications using Sonner
- ✅ Custom animations (hover effects, transitions)
- ✅ Responsive design
- ✅ Color scheme: Amber-600/700/800 for primary, Stone-900 for text, warm gradients

**Technologies**:
- React 19 with React Router
- Tailwind CSS for styling
- Shadcn/UI components (Button, Card, Input, Textarea, Label, Toast)
- Lucide React icons
- Sonner for toast notifications
- Inter font family

**Design Highlights**:
- Avoided prohibited dark purple/blue gradients
- Used warm amber tones throughout
- Proper spacing and whitespace
- Hover effects on all interactive elements
- Smooth scroll behavior
- No AI emojis - used Lucide icons only

## Prioritized Backlog

### P0 Features (High Priority)
1. **Backend Development**
   - MongoDB models for Prayer Requests and Connect submissions
   - POST /api/prayer-requests endpoint
   - POST /api/connect endpoint
   - GET endpoints for admin view (optional)
   - Integration with frontend forms

2. **Email Notifications** (Optional)
   - Send email notifications when prayer requests are submitted
   - Send email notifications when connect forms are submitted
   - Email integration (SendGrid, AWS SES, or similar)

### P1 Features (Medium Priority)
1. **Service Times & Events Section**
   - Add Sunday service times
   - Weekly schedule display
   - Upcoming events calendar

2. **Sermons/Messages Section**
   - Audio/video player for sermon archives
   - Sermon categorization and search
   - Latest sermon featured on homepage

3. **Gallery Section**
   - Photo gallery from church events
   - Image upload and management

### P2 Features (Nice to Have)
1. **Testimonials Section**
   - Member testimonies
   - Carousel/slider display

2. **Ministries Page**
   - Different ministry groups
   - Ministry leaders and contact info

3. **Blog/News Section**
   - Church announcements
   - Blog posts and articles

4. **Online Giving/Donations**
   - Stripe integration for donations
   - Recurring giving options

5. **Admin Dashboard**
   - View submitted prayer requests
   - View connect form submissions
   - Manage content

## Next Tasks
1. User confirmation to proceed with backend development
2. Create backend API endpoints for forms
3. Integrate frontend with backend
4. Test end-to-end functionality
5. Consider email notification integration

## Notes
- All forms currently use frontend state only (toast notifications)
- No backend integration yet
- All content extracted from church's existing Linktree and Canva site
- Design follows warm, welcoming church aesthetic
