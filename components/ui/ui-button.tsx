// MyButton.tsx
'use client';

import { Button, extendVariants } from '@nextui-org/react';

export const UiButton = extendVariants(Button, {
  variants: {
    color: {
      success: 'bg-success text-white',
      pastelPrimary: 'bg-primary-50 text-primary-400'
    },

    size: {
      md: 'h-unit-xl min-w-unit-3xl',
      lg: 'mobile-large:px-[2rem] mobile-large:py-lg max-mobile-large:h-fit max-mobile-large:py-sm max-mobile-large:px-sm text-sm mobile-large:text-md leading-sm  mobile-large:leading-md font-normal '
    },

    variant: {}
  },
  compoundVariants: [
    {
      color: 'default',
      variant: 'faded',
      className: 'text-default'
    },
    { color: 'default', variant: 'bordered', className: 'text-default-400' },
    {
      color: 'default',
      variant: 'light',
      className: 'text-default'
    },
    {
      color: 'default',
      variant: 'ghost',
      className: 'text-default hover:text-white'
    }
  ],
  defaultVariants: {
    // <- modify/add default variants
    radius: 'md',
    size: 'md'
  }
});

export default UiButton;
