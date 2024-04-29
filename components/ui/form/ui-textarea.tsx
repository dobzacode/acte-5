'use client';

import { Textarea, extendVariants } from '@nextui-org/react';

export const UiTextarea = extendVariants(Textarea, {
  variants: {},
  compoundVariants: [],
  defaultVariants: {
    size: 'md'
  }
});

export default UiTextarea;
