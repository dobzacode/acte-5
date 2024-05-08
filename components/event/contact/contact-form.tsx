'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { verifyCaptchaAction } from '@/app/_actions';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/shadcn/form';
import { Input } from '@/components/ui/shadcn/input';
import { Label } from '@/components/ui/shadcn/label';
import { Textarea } from '@/components/ui/shadcn/textarea';
import { cn } from '@/lib/utils';
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
                <Label className="caption font-normal" htmlFor={'type'}>
                  Type de projet *
                </Label>
                <FormControl>
                  <Input
                    className="body rounded-xs    shadow-inner ring-primary-400"
                    required
                    color="primary"
                    placeholder=""
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
                <Label className="caption font-normal" htmlFor={'société'}>
                  Société *
                </Label>
                <FormControl>
                  <Input
                    className="body rounded-xs    shadow-inner ring-primary-400"
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
            name="nom"
            disabled={form.formState.isSubmitting}
            render={({ field }) => (
              <FormItem className="col-span-1 flex flex-col gap-0.5">
                <Label className="caption font-normal" htmlFor={'nom'}>
                  Nom *
                </Label>
                <FormControl>
                  <Input
                    className="body rounded-xs    shadow-inner ring-primary-400"
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
            name="prénom"
            disabled={form.formState.isSubmitting}
            render={({ field }) => (
              <FormItem className="col-span-1 flex flex-col gap-0.5">
                <Label className="caption font-normal" htmlFor={'prénom'}>
                  Prénom *
                </Label>
                <FormControl>
                  <Input
                    className="body rounded-xs    shadow-inner ring-primary-400"
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
                <Label className="caption font-normal" htmlFor={'email'}>
                  Email *
                </Label>

                <FormControl>
                  <Input
                    className="body rounded-xs    shadow-inner ring-primary-400"
                    color="primary"
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
                <Label className="caption font-normal" htmlFor={'téléphone'}>
                  Téléphone
                </Label>
                <FormControl>
                  <Input
                    className="body rounded-xs    shadow-inner ring-primary-400"
                    type="number"
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
                <Label className="caption font-normal" htmlFor={'message'}>
                  Message *
                </Label>
                <FormControl>
                  <Textarea
                    rows={4}
                    className="body rounded-xs    shadow-inner ring-primary-400"
                    required
                    color="primary"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-sm font-normal text-danger-400" />
              </FormItem>
            )}
          />
        </div>
        {form.formState.isSubmitSuccessful ? (
          <FormMessage className="text-sm text-success-400">
            Votre demande de contact a bien été envoyée !
          </FormMessage>
        ) : null}
        <UiButton
          spinner={
            <BarLoader
              style={{ position: 'absolute', bottom: '0.2rem', width: '100%' }}
            ></BarLoader>
          }
          className="relative h-unit-2xl rounded-xs"
          isLoading={form.formState.isSubmitting}
          type="submit"
          color="primary"
        >
          Envoyer ma demande
        </UiButton>
        <p className={`caption text-center  font-normal`}>
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
