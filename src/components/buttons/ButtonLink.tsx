import React, { PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import { VariantProps } from 'class-variance-authority';

import { buttonVariants } from '../ui/button';

interface ButtonLinkProps
  extends VariantProps<typeof buttonVariants>,
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: PropsWithChildren<ReactNode>;
  href: string;
}

function ButtonLink({
  children,
  href,
  size,
  variant,
  className,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={buttonVariants({
        size,
        variant,
        className,
        ...props,
      })}
    >
      {children}
    </Link>
  );
}

export default ButtonLink;
