# 🚀 Deployment Guide - Environment Variable Setup

## Important: Set Environment Variable on Vercel

Since we moved the webhook URL to an environment variable for security, you need to configure it on Vercel before deploying.

### Steps:

1. **Go to your Vercel Dashboard**
   - Navigate to your QuickSitePH project
   - Click on **Settings** tab

2. **Add Environment Variable**
   - Go to **Environment Variables** section
   - Click **Add New**
   - Enter the following:
     - **Name**: `VITE_WEBHOOK_URL`
     - **Value**: `https://hook.eu1.make.com/ui12v2h6btgjjxca9m9c9lifbpu3qkd7`
     - **Environment**: Select all (Production, Preview, Development)

3. **Redeploy**
   - After adding the variable, trigger a new deployment
   - You can do this by pushing a commit or using the "Redeploy" button

### Testing Locally

To test the contact form locally:

```bash
# The .env file is already created with the webhook URL
npm run dev
```

The form should work as before, but now the URL is securely stored in the environment variable.

### Verification Checklist

After deployment:
- [ ] Contact form submits successfully
- [ ] Hero shows "Accepting New Clients for 2026"
- [ ] Footer only shows Facebook and LinkedIn (no Instagram/YouTube)
- [ ] Mobile menu closes when clicking any nav link
- [ ] No console errors about missing VITE_WEBHOOK_URL

---

## What Changed

### Security
- ✅ Webhook URL moved from hardcoded to environment variable
- ✅ Added error handling for missing environment variable

### Content Updates
- ✅ Updated year from 2025 to 2026
- ✅ Fixed invalid Schema.org structured data

### UX Improvements
- ✅ Removed dead social media links (Instagram, YouTube)
- ✅ Removed non-existent blog link
- ✅ Fixed mobile menu to close on all navigation clicks

### Files Modified
- `src/components/sections/Contact.jsx`
- `src/components/sections/Hero.jsx`
- `src/components/sections/Navbar.jsx`
- `index.html`
- `.env` (created, gitignored)
- `.env.example` (created for reference)
