'use client';

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';

interface UiBreadcrumbsProps {
  className?: string;
  element: {
    text: string;
    href: string;
  }[];
}

export default function UiBreadcrumbs({ element, className }: UiBreadcrumbsProps) {
  return (
    <Breadcrumbs className={className}>
      {element instanceof Array ? (
        element.map((child, index) => (
          <BreadcrumbItem href={child.href} key={index}>
            {child.text}
          </BreadcrumbItem>
        ))
      ) : (
        <BreadcrumbItem>{element}</BreadcrumbItem>
      )}
    </Breadcrumbs>
  );
}
