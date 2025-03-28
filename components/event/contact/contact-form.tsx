'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { sendContactEmail, verifyCaptchaAction } from '@/app/_actions';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/shadcn/form';
import { Input } from '@/components/ui/shadcn/input';
import { Textarea } from '@/components/ui/shadcn/textarea';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import BarLoader from 'react-spinners/BarLoader';
import UiButton from '../../ui/ui-button';

const formSchema = z.object({
  type: z.string().min(2, {
    message: 'Le type de projet doit comporter au moins deux caractères.'
  }),
  société: z.string().min(2, {
    message: 'La société doit comporter au moins deux caractères.'
  }),
  nom: z.string().min(2, {
    message: 'Le nom doit comporter au moins deux caractères.'
  }),
  prénom: z.string().min(2, {
    message: 'Le prénom doit comporter au moins deux caractères.'
  }),
  email: z.string().email({
    message: 'Veuillez saisir une adresse e-mail valide.'
  }),
  téléphone: z.coerce
    .number()
    .min(10, { message: 'Le numéro de téléphone doit comporter au moins 10 caractères.' })
    .optional(),
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
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(
    null
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: '',
      société: '',
      nom: '',
      prénom: '',
      email: '',
      message: ''
    }
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitStatus(null);

    if (!executeRecaptcha) {
      setSubmitStatus({
        success: false,
        message: "La vérification reCAPTCHA n'a pas pu être lancée"
      });
      return;
    }

    const token = await executeRecaptcha('onSubmit');
    const verified = await verifyCaptchaAction(token);

    if (!verified) {
      setSubmitStatus({
        success: false,
        message: "La vérification via reCaptcha n'a pas pu être effectuée"
      });
      return;
    }

    try {
      // Send the email using the server action
      const result = await sendContactEmail(values);
      setSubmitStatus(result);

      if (result.success) {
        form.reset();
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      setSubmitStatus({
        success: false,
        message: "Une erreur s'est produite lors de l'envoi du message"
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        aria-disabled={form.formState.isSubmitting}
        className="card container mx-auto flex max-w-[40rem] flex-col gap-lg border-black/10 p-lg"
      >
        <div
          className={cn('grid grid-cols-2 gap-md', form.formState.isSubmitting && 'animate-pulse')}
        >
          <FormField
            control={form.control}
            name="type"
            disabled={form.formState.isSubmitting}
            render={({ field }) => (
              <FormItem className="col-span-1 flex flex-col gap-0.5">
                <FormControl>
                  <Input
                    className="body rounded-xs shadow-inner ring-primary-400"
                    required
                    color="primary"
                    placeholder="Type de projet *"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm font-normal text-danger-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="société"
            disabled={form.formState.isSubmitting}
            render={({ field }) => (
              <FormItem className="col-span-1 flex flex-col gap-0.5">
                <FormControl>
                  <Input
                    className="body rounded-xs shadow-inner ring-primary-400"
                    required
                    placeholder="Société *"
                    color="primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm font-normal text-danger-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nom"
            disabled={form.formState.isSubmitting}
            render={({ field }) => (
              <FormItem className="col-span-1 flex flex-col gap-0.5">
                <FormControl>
                  <Input
                    className="body rounded-xs shadow-inner ring-primary-400"
                    required
                    placeholder="Nom *"
                    color="primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm font-normal text-danger-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prénom"
            disabled={form.formState.isSubmitting}
            render={({ field }) => (
              <FormItem className="col-span-1 flex flex-col gap-0.5">
                <FormControl>
                  <Input
                    placeholder="Prénom *"
                    className="body rounded-xs shadow-inner ring-primary-400"
                    required
                    color="primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm font-normal text-danger-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            disabled={form.formState.isSubmitting}
            name="email"
            render={({ field }) => (
              <FormItem className="col-span-1 flex flex-col gap-0.5">
                <FormControl>
                  <Input
                    className="body rounded-xs shadow-inner ring-primary-400"
                    color="primary"
                    placeholder="Email *"
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm font-normal text-danger-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            disabled={form.formState.isSubmitting}
            name="téléphone"
            render={({ field }) => (
              <FormItem className="col-span-1 flex flex-col gap-0.5">
                <FormControl>
                  <Input
                    className="body rounded-xs shadow-inner ring-primary-400"
                    type="number"
                    placeholder="Téléphone *"
                    color="primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm font-normal text-danger-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            disabled={form.formState.isSubmitting}
            name="message"
            render={({ field }) => (
              <FormItem className="col-span-2 flex flex-col gap-0.5">
                <FormControl>
                  <Textarea
                    rows={4}
                    className="body rounded-xs shadow-inner ring-primary-400"
                    required
                    placeholder="Message *"
                    color="primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm font-normal text-danger-400" />
              </FormItem>
            )}
          />
        </div>
        {submitStatus ? (
          <FormMessage
            className={`text-sm ${submitStatus.success ? 'text-success-400' : 'text-danger-400'}`}
          >
            {submitStatus.message}
          </FormMessage>
        ) : null}
        <UiButton
          spinner={
            <BarLoader
              style={{
                position: 'absolute',
                bottom: '0.2rem',
                width: '100%',
                backgroundColor: 'white'
              }}
            ></BarLoader>
          }
          className="body h-unit-2xl relative rounded-xs"
          isLoading={form.formState.isSubmitting}
          type="submit"
          color="primary"
          disabled={form.formState.isSubmitting}
        >
          Envoyer ma demande
        </UiButton>
        <p className={`caption text-center font-normal`}>
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
