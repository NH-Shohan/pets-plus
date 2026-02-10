'use client';

import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  description: string;
  headingClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
}

export default function SectionHeader({
  title,
  description,
  headingClassName = 'section-title',
  descriptionClassName = 'text-body-large',
  containerClassName = ''
}: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col items-center text-center mb-15 lg:mb-18', containerClassName)}>
      <h2 className={cn('heading-bottom-padding font-extrabold tracking-tight', headingClassName)}>{title}</h2>
      <p className={cn('text-body-large', descriptionClassName)}>{description}</p>
    </div>
  );
}
