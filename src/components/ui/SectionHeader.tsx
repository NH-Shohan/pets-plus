'use client';

import AnimateInView from '@/components/ui/AnimateInView';
import { defaultTransition, fadeUp } from '@/lib/animations';

interface SectionHeaderProps {
  title: string;
  description: string;
  animated?: boolean;
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
 * @param animated - Whether to animate on scroll (default: true)
 * @param headingClassName - Custom classes for heading (e.g., text-hero-secondary)
 * @param descriptionClassName - Custom classes for description
 * @param containerClassName - Custom classes for container (e.g., mb-16)
 */
export default function SectionHeader({
  title,
  description,
  animated = true,
  headingClassName = 'text-hero-secondary',
  descriptionClassName = 'text-body-medium',
  containerClassName = '',
}: SectionHeaderProps) {
  const content = (
    <>
      <h2 className={`${headingClassName} text-foreground heading-bottom-padding font-extrabold tracking-tight`}>
        {title}
      </h2>
      <p className={`${descriptionClassName} text-foreground`}>{description}</p>
    </>
  );

  if (animated) {
    return (
      <AnimateInView
        variants={fadeUp}
        transition={defaultTransition}
        className={`flex flex-col items-center text-center heading-bottom-padding ${containerClassName}`}
      >
        {content}
      </AnimateInView>
    );
  }

  return <div className={`text-center heading-bottom-padding !mb-12 ${containerClassName}`}>{content}</div>;
}
