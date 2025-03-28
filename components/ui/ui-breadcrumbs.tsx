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
          <BreadcrumbItem
            className="break-words [&>*>*]:!line-clamp-2 [&>*>*]:!whitespace-break-spaces"
            key={index}
          >
            <Link className="overflow-ellipsis" href={child.href}>
              {child.text.charAt(0).toUpperCase() + child.text.slice(1).toLowerCase()}
            </Link>
          </BreadcrumbItem>
        ))
      ) : (
        <BreadcrumbItem>{element}</BreadcrumbItem>
      )}
    </Breadcrumbs>
  );
}
