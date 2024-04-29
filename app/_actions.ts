'use server';

import { draftMode } from 'next/headers';

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
