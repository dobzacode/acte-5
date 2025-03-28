'use server';

import { draftMode } from 'next/headers';
import nodemailer from 'nodemailer';
import { z } from 'zod';

export async function verifyCaptchaAction(token: string) {
  const res = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
  });

  const data = await res.json();

  if (data.score > 0.5) {
    return true;
  } else {
    return false;
  }
}

export async function disableDraftMode() {
  await Promise.allSettled([
    draftMode().disable(),

    new Promise((resolve) => setTimeout(resolve, 1000))
  ]);
}

const contactFormSchema = z.object({
  type: z.string(),
  société: z.string(),
  nom: z.string(),
  prénom: z.string(),
  email: z.string().email(),
  téléphone: z.number().optional(),
  message: z.string()
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export async function sendContactEmail(
  data: ContactFormData
): Promise<{ success: boolean; message: string }> {
  try {
    // Validate the form data
    const validatedData = contactFormSchema.parse(data);

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
      }
    });

    // Construct email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: validatedData.email,
      subject: `Nouveau contact: ${validatedData.type} - ${validatedData.société}`,
      text: `
Type de projet: ${validatedData.type}
Société: ${validatedData.société}
Nom: ${validatedData.nom}
Prénom: ${validatedData.prénom}
Email: ${validatedData.email}
Téléphone: ${validatedData.téléphone || 'Non renseigné'}

Message:
${validatedData.message}
      `,
      html: `
<h2>Nouvelle demande de contact</h2>
<p><strong>Type de projet:</strong> ${validatedData.type}</p>
<p><strong>Société:</strong> ${validatedData.société}</p>
<p><strong>Nom:</strong> ${validatedData.nom}</p>
<p><strong>Prénom:</strong> ${validatedData.prénom}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Téléphone:</strong> ${validatedData.téléphone || 'Non renseigné'}</p>
<h3>Message:</h3>
<p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Email envoyé avec succès' };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return { success: false, message: "Échec de l'envoi de l'email" };
  }
}

// Schéma pour le formulaire de spectacle
const spectacleFormSchema = z.object({
  sujet: z.string(),
  société: z.string(),
  nom: z.string(),
  prénom: z.string(),
  email: z.string().email(),
  téléphone: z.number().optional(),
  message: z.string()
});

type SpectacleFormData = z.infer<typeof spectacleFormSchema>;

export async function sendSpectacleEmail(
  data: SpectacleFormData
): Promise<{ success: boolean; message: string }> {
  try {
    // Validate the form data
    const validatedData = spectacleFormSchema.parse(data);

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: process.env.EMAIL_SERVER_SECURE === 'true',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD
      }
    });

    // Construct email content
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      replyTo: validatedData.email,
      subject: `Nouvelle demande spectacle: ${validatedData.sujet} - ${validatedData.société}`,
      text: `
Sujet: ${validatedData.sujet}
Société: ${validatedData.société}
Nom: ${validatedData.nom}
Prénom: ${validatedData.prénom}
Email: ${validatedData.email}
Téléphone: ${validatedData.téléphone || 'Non renseigné'}

Message:
${validatedData.message}
      `,
      html: `
<h2>Nouvelle demande de spectacle</h2>
<p><strong>Sujet:</strong> ${validatedData.sujet}</p>
<p><strong>Société:</strong> ${validatedData.société}</p>
<p><strong>Nom:</strong> ${validatedData.nom}</p>
<p><strong>Prénom:</strong> ${validatedData.prénom}</p>
<p><strong>Email:</strong> ${validatedData.email}</p>
<p><strong>Téléphone:</strong> ${validatedData.téléphone || 'Non renseigné'}</p>
<h3>Message:</h3>
<p>${validatedData.message.replace(/\n/g, '<br>')}</p>
      `
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return { success: true, message: 'Email envoyé avec succès' };
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return { success: false, message: "Échec de l'envoi de l'email" };
  }
}
