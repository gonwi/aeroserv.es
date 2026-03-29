import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export function Button({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}) {
  return (
    <Link href={href} className={cn(variant === 'primary' ? 'button-primary' : 'button-secondary', className)}>
      {children}
    </Link>
  );
}
