import RecaptchaProvider from '@/components/wrapper/recaptcha-provider';
import ContactForm from './contact-form';

export default function FormWrapped({}) {
  return (
    <RecaptchaProvider>
      <ContactForm></ContactForm>
    </RecaptchaProvider>
  );
}
