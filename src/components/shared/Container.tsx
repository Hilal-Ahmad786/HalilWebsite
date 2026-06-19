import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

/** Controlled desktop container — max 1180px, responsive gutters. */
export default function Container({ as: Tag = 'div', className, children }: ContainerProps) {
  return <Tag className={cn('container-page', className)}>{children}</Tag>;
}
