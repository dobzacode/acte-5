import SpectacleForm from '@/components/spectacle/spectacle-form';
import RecaptchaProvider from '@/components/wrapper/recaptcha-provider';
import ContactForm from '../../event/contact/contact-form';

export default function FormWrapped({ isSpectacle }: { isSpectacle?: boolean }) {
  return (
    <RecaptchaProvider>
      {!isSpectacle ? <ContactForm></ContactForm> : <SpectacleForm></SpectacleForm>}
    </RecaptchaProvider>
  );
}
