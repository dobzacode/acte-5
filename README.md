<h1 align="center">Welcome to Acte-5 🎭</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

> Acte-5 is a dynamic platform created for a client specializing in event production and comedy shows. Designed to showcase upcoming events, comedy performances, and provide an engaging experience for visitors, Acte-5 combines creativity and functionality in a seamless, visually appealing way.

### ✨ [Demo](https://acte-5.vercel.app)

## Features

- **Next.js Frontend**: Built with Next.js for a responsive, high-performance user interface that efficiently handles routing and content rendering.
- **Sanity CMS**: Powered by Sanity, allowing for easy content management and updates for events, shows, and announcements.
- **Framer Motion**: Bringing animations to life with Framer Motion, delivering smooth and captivating transitions for an enhanced user experience.
- **Vercel Hosting**: Deployed on Vercel, providing fast load times and reliable performance with optimized hosting tailored for Next.js applications.
- **Contact Form with Nodemailer**: Integrated email functionality using Nodemailer to seamlessly process and deliver contact form submissions.

## Setup

### Email Configuration

The contact form uses Nodemailer to send emails. To set up email functionality:

1. Copy `.env.local.example` to `.env.local`
2. Update the email configuration variables:
   ```
   EMAIL_SERVER_HOST=your-smtp-server.com
   EMAIL_SERVER_PORT=587
   EMAIL_SERVER_USER=your-email@example.com
   EMAIL_SERVER_PASSWORD=your-password
   EMAIL_SERVER_SECURE=false
   EMAIL_FROM=your-email@example.com
   EMAIL_TO=recipient@example.com
   ```
3. Add these environment variables to your Vercel project settings if deploying to Vercel

## Author

👤 **Corentin Kittel**

- Website: [corentinkittel.fr](https://corentinkittel.fr)
- GitHub: [@dobzacode](https://github.com/dobzacode)

## Show your support

Give a ⭐️ if you enjoy Acte-5 and find it helpful for discovering exciting events and comedy shows!
