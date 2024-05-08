// MyButton.tsx
'use client';

import { Button, extendVariants } from '@nextui-org/react';

export const UiButton = extendVariants(Button, {
  variants: {
    color: {
      success: 'bg-success text-white',
      pastelPrimary: 'bg-primary-50 text-primary-400',
      black: 'bg-black text-white',
      white:
        'bg-white text-black hover:bg-black hover:text-white hover:opacity-100 data-[hover=true]:opacity-100'
    },

    size: {
      md: 'h-unit-xl min-w-unit-3xl',
      lg: '   items-center  text-sm laptop:text-md leading-sm  laptop:leading-md font-normal max-laptop:h-unit-10 px-[16px] py-[4px] gap-1 laptop:gap-2 laptop:px-[24px] laptop:py-[30px]'
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
