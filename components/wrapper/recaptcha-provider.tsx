'use client';

import React from 'react';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function RecaptchaProvider({ children }: { children: React.ReactNode }) {
  return (
    <GoogleReCaptchaProvider
      scriptProps={{
        async: false,
        defer: false,
        appendTo: 'head',
        nonce: undefined
      }}
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
