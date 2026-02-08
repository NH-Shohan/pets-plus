'use client';

import AnimateInView from '@/components/ui/AnimateInView';
import { defaultStagger, defaultTransition, fadeUp } from '@/lib/animations';
import { motion } from 'motion/react';
import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

const features = [
  {
    id: 1,
    title: 'Verified Breeders',
    description: 'Every breeder undergoes thorough background checks and certification',
    icon: '/check.svg',
  },
  {
    id: 2,
    title: 'Secure Messaging',
    description: 'Strict breeding standards ensure healthy, well-cared-for animals',
    icon: '/shield.svg',
  },
  {
    id: 3,
    title: 'Reviewed & Rated',
    description: 'Expert team available around the clock to assist buyers and breeders.',
    icon: '/people.svg',
  },
];

export default function WhyTrustUs() {
  return (
    <section className="w-full bg-background section-padding-top-bottom">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Why buyers trust us"
          description="Whether you're browsing or selling, we've made it easy."
        />

        {/* Feature Cards - stagger when in view */}
        <AnimateInView variants={defaultStagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={fadeUp}
              transition={defaultTransition}
              className="flex flex-col items-center text-center p-8 md:p-12 rounded-2xl border border-border"
            >
              {/* Icon */}
              <div className="mb-4">
                <Image src={feature.icon} alt={feature.title} width={32} height={32} />
              </div>

              {/* Title */}
              <h3 className="text-display-small text-primary mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-body-base text-body-small text-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </AnimateInView>
      </div>
    </section>
  );
}
