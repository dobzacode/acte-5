// MyButton.tsx
'use client';

import { Button, extendVariants } from '@nextui-org/react';

export const UiButton = extendVariants(Button, {
  variants: {
    color: {
      success: 'bg-success text-white'
    },

    size: {
      md: 'h-unit-xl min-w-unit-3xl',
      lg: 'px-6 py-3'
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
