# Punarnavam Ayur Retreat

Production-ready Vite + React site for Punarnavam Ayur Retreat.

## Local Development

```bash
npm install
npm run dev
```

The development server starts on the Vite default port and prints the local URL in the terminal.

## Production Build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Environment Variables

Booking requests are sent through EmailJS. For Vercel, add these environment variables in the project settings:

```bash
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

Use the real values only in Vercel environment variables or in a local `.env` file that is not committed.

## Vercel

This repository is configured as a Vite app:

- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

`vercel.json` includes a rewrite to `index.html` so direct page loads keep working for the single-page app.
