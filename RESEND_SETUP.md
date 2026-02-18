# 🚀 Resend Email Setup Guide

## Step 1: Sign Up for Resend

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (100 emails/day)
3. Verify your email address

## Step 2: Get Your API Key

1. Go to the [API Keys page](https://resend.com/api-keys)
2. Click **Create API Key**
3. Give it a name (e.g., "QuickSite PH Production")
4. Copy the API key (starts with `re_`)

## Step 3: Configure Email Domain

You have two options:

### Option A: Use Resend's Test Domain (Quick Start)
- Use `onboarding@resend.dev` as your sender email
- **Limitation**: Can only send to your own verified email
- Good for testing, but not for production

### Option B: Verify Your Own Domain (Recommended for Production)
1. Go to [Domains page](https://resend.com/domains)
2. Click **Add Domain**
3. Enter `quicksiteph.com`
4. Add the DNS records they provide to your domain registrar
5. Wait for verification (usually 5-10 minutes)
6. Use `noreply@quicksiteph.com` as your sender email

## Step 4: Update Local Environment

Update your `.env` file:

```env
# Replace with your actual API key
RESEND_API_KEY=re_your_actual_api_key_here

# Use test email for testing, or your verified domain
RESEND_FROM_EMAIL=onboarding@resend.dev
# OR (after domain verification):
# RESEND_FROM_EMAIL=noreply@quicksiteph.com
```

## Step 5: Test Locally

```bash
npm run dev
```

1. Go to `http://localhost:5173/#contact`
2. Fill out the form with **your own email address**
3. Submit the form
4. Check your inbox for the confirmation email

## Step 6: Configure Vercel Environment Variables

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your QuickSitePH project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

| Variable | Value | Environment |
|---|---|---|
| `VITE_WEBHOOK_URL` | `https://hook.eu1.make.com/...` | All |
| `RESEND_API_KEY` | `re_xxxxx` (your actual key) | All |
| `RESEND_FROM_EMAIL` | `noreply@quicksiteph.com` | All |

5. Click **Save**

## Step 7: Deploy

```bash
git add .
git commit -m "Add Resend email confirmation system"
git push
```

Vercel will automatically deploy your changes.

## Step 8: Test on Production

1. Go to `https://quicksiteph.com/#contact`
2. Submit a test form with a real email
3. **Verify:**
   - ✅ You receive the confirmation email
   - ✅ You receive the Make.com notification
   - ✅ Email looks professional and branded

---

## Troubleshooting

### "Failed to send confirmation email"
- Check that `RESEND_API_KEY` is set correctly in Vercel
- Verify the API key is active in Resend dashboard
- Check Vercel function logs for detailed error

### Email not arriving
- Check spam folder
- If using test domain, ensure recipient email is verified in Resend
- Check Resend dashboard logs for delivery status

### Make.com webhook not working
- Verify `VITE_WEBHOOK_URL` is still set correctly
- Test the webhook URL directly with a tool like Postman
- Check Make.com scenario logs

---

## What Happens When Form is Submitted

1. **Frontend** (`Contact.jsx`) sends data to `/api/contact`
2. **API Endpoint** (`api/contact.js`) does two things in parallel:
   - Sends data to Make.com webhook (your internal notification)
   - Sends confirmation email via Resend (client notification)
3. **Success** message shows to user
4. **Client** receives professional branded email within seconds
5. **You** receive Make.com notification as before

---

## Email Preview

The confirmation email includes:
- ✅ Professional QuickSite PH branding
- ✅ Personalized greeting with client's name
- ✅ Summary of their inquiry
- ✅ Expected response time (24 hours)
- ✅ Links to your website and template gallery
- ✅ Social media links
- ✅ Mobile-responsive design

---

## Cost

**Resend Free Tier:**
- 100 emails per day
- 3,000 emails per month
- Perfect for a growing business

If you exceed this, pricing is very affordable:
- $20/month for 50,000 emails
- See [resend.com/pricing](https://resend.com/pricing)
