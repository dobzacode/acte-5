'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { verifyCaptchaAction } from '@/app/_actions';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/shadcn/form';
import { cn } from '@/lib/utils';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import BarLoader from 'react-spinners/BarLoader';
import UiButton from '../ui-button';
import UiInput from './ui-input';
import UiTextarea from './ui-textarea';

const formSchema = z.object({
  nom: z.string().min(2, {
    message: 'Le nom doit comporter au moins deux caractères.'
  }),
  prénom: z.string().min(2, {
    message: 'Le prénom doit comporter au moins deux caractères.'
  }),
  email: z.string().email({
    message: 'Veuillez saisir une adresse e-mail valide.'
  }),
  message: z
    .string()
    .min(10, {
      message: 'Le message doit comporter au moins 10 caractères.'
    })
    .max(300, {
      message: 'Le message doit comporter au maximum 300 caractères.'
    })
});

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: '',
      prénom: '',
      email: '',
      message: ''
    }
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!executeRecaptcha) {
      return console.log("executeRecaptcha n'a pas pû être lancé");
    }

    const token = await executeRecaptcha('onSubmit');

    const verified = await verifyCaptchaAction(token);

    if (!verified) {
      return console.log("La vérification via reCaptcha n'a pas pû être effectuée");
    }

    return console.log('Les données ont été soumises', token);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        aria-disabled={form.formState.isSubmitting}
        className="card flex w-fit flex-col gap-lg"
      >
        <div
          className={cn('grid grid-cols-2 gap-md', form.formState.isSubmitting && 'animate-pulse')}
        >
          <FormField
            control={form.control}
            name="nom"
            disabled={form.formState.isSubmitting}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormControl>
                  <UiInput
                    classNames={{ inputWrapper: 'py-2' }}
                    variant="underlined"
                    isRequired
                    color="primary"
                    placeholder="Nom"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm text-danger-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prénom"
            disabled={form.formState.isSubmitting}
            render={({ field }) => (
              <FormItem className="col-span-1">
                <FormControl>
                  <UiInput
                    classNames={{ inputWrapper: 'py-2' }}
                    variant="underlined"
                    isRequired
                    color="primary"
                    placeholder="Prénom"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm text-danger-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            disabled={form.formState.isSubmitting}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <UiInput
                    variant="underlined"
                    color="primary"
                    placeholder="Email"
                    classNames={{ inputWrapper: 'py-2' }}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm text-danger-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            disabled={form.formState.isSubmitting}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2">
                <FormControl>
                  <UiTextarea
                    classNames={{ inputWrapper: 'py-2' }}
                    variant="underlined"
                    color="primary"
                    {...field}
                    placeholder="Message"
                  />
                </FormControl>
                <FormMessage className="text-sm text-danger-400" />
              </FormItem>
            )}
          />
          {form.formState.isSubmitSuccessful ? (
            <FormMessage className="text-sm text-success-400">
              Votre demande de contact a bien été envoyée !
            </FormMessage>
          ) : null}
        </div>
        <UiButton
          spinner={
            <BarLoader
              style={{ position: 'absolute', bottom: '0.2rem', width: '100%' }}
            ></BarLoader>
          }
          className="relative h-unit-2xl"
          isLoading={form.formState.isSubmitting}
          type="submit"
          color="primary"
        >
          Envoyer
        </UiButton>
        <p className={`caption  text-center`}>
          Ce site est protégé par reCAPTCHA, les
          <a className="text-primary-500" href="https://policies.google.com/privacy">
            {' '}
            règles de confidentialité
          </a>{' '}
          et les
          <a className="text-primary-500" href="https://policies.google.com/terms">
            {' '}
            conditions d&apos;utilisation
          </a>{' '}
          s&apos;y appliquent.
        </p>
      </form>
    </Form>
  );
}
