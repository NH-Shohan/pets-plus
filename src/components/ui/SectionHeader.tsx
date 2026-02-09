"use client";

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
  headingClassName = "text-hero-secondary",
  descriptionClassName = "text-body-medium",
  containerClassName = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col items-center text-center heading-bottom-padding mb-12! lg:mb-18! ${containerClassName}`}
    >
      <h2
        className={`${headingClassName} text-foreground heading-bottom-padding font-extrabold tracking-tight`}
      >
        {title}
      </h2>
      <p className={`${descriptionClassName} text-foreground`}>{description}</p>
    </div>
  );
}
