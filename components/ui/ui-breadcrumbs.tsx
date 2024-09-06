'use client';

import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import Link from 'next/link';

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
          <BreadcrumbItem key={index}>
            <Link scroll={false} href={child.href}>
              {child.text}
            </Link>
          </BreadcrumbItem>
        ))
      ) : (
        <BreadcrumbItem>{element}</BreadcrumbItem>
      )}
    </Breadcrumbs>
  );
}
