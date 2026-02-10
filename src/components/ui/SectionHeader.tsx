'use client';

import { twMerge } from 'tailwind-merge';

interface SectionHeaderProps {
  title: string;
  description: string;
  headingClassName?: string;
  descriptionClassName?: string;
  containerClassName?: string;
}

/**
 * SectionHeader Component
 *
 * Reusable section header with title and description
 * Used across multiple sections: Categories, WhyTrustUs, HowItWorks, FAQ
 *
 * @param title - Main heading text
 * @param description - Subheading/description text
 * @param headingClassName - Custom classes for heading (e.g., text-hero-secondary)
 * @param descriptionClassName - Custom classes for description
 * @param containerClassName - Custom classes for container (e.g., mb-16)
 */
export default function SectionHeader({
  title,
  description,
  headingClassName = 'section-title',
  descriptionClassName = 'text-body-large',
  containerClassName = ''
}: SectionHeaderProps) {
  return (
    <div className={twMerge('flex flex-col items-center text-center  mb-15 lg:mb-18', containerClassName)}>
      <h2 className={twMerge('heading-bottom-padding font-extrabold tracking-tight', headingClassName)}>{title}</h2>
      <p className={twMerge('text-body-large', descriptionClassName)}>{description}</p>
    </div>
  );
}
