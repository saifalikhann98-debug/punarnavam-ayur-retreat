# EmailJS Setup Instructions

Follow these steps to configure email sending for your Punarnavam Ayur Retreat website:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, click "Email Services"
2. Click "Add New Service"
3. Choose **Gmail** (or your preferred email provider)
4. Connect your Gmail account: **punarnavamayurretreat@gmail.com**
5. Give it a name like "Punarnavam Gmail"
6. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Click "Email Templates" in the dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:**
```
New Retreat Booking Request from {{from_name}}
```

**Body:**
```
You have received a new booking request from the Punarnavam Ayur Retreat website.

Guest Details:
---------------
Name: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Message/Notes:
{{message}}

---
Sent from Punarnavam Ayur Retreat Website
```

4. Save the template and copy the **Template ID**

## Step 4: Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (it looks like: "YOUR_PUBLIC_KEY_HERE")
3. Copy it

## Step 5: Add Environment Variables

Add these values in Vercel project settings and in your local `.env` file when testing locally:

```bash
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Do not commit real EmailJS values to the repository. Vite exposes `VITE_` variables in the browser bundle, so these values should be treated as operational configuration rather than private secrets.

## Step 6: Test It!

1. Visit your website
2. Click "Book Now" and fill out the form
3. Submit the form
4. Check **punarnavamayurretreat@gmail.com** inbox for the booking request email

## Troubleshooting

- **Email not sending?** Check the browser console (F12) for error messages
- **Wrong email address?** Make sure the Gmail service in EmailJS is connected to punarnavamayurretreat@gmail.com
- **Template not working?** Verify the template variable names match: `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{message}}`

## Free Tier Limits

EmailJS free plan includes:
- 200 emails per month
- 2 email services
- Unlimited templates

This should be more than enough for a retreat booking website!

---

**Need Help?** Contact EmailJS support or check their documentation at https://www.emailjs.com/docs/
