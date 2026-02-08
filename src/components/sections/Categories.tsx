'use client';

import AnimateInView from '@/components/ui/AnimateInView';
import SectionHeader from '@/components/ui/SectionHeader';
import { defaultStagger, defaultTransition, fadeUp } from '@/lib/animations';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    id: 1,
    name: 'Pets & Companions',
    image: '/category-1.png',
    href: '/',
  },
  {
    id: 2,
    name: 'Farm & Livestock',
    image: '/category-2.png',
    href: '/',
  },
  {
    id: 3,
    name: 'Exotic Species',
    image: '/category-3.png',
    href: '/',
  },
];

export default function Categories() {
  return (
    <section className="w-full bg-mint-faint section-padding-bottom">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Browse by category"
          description="These dogs have the potential to be wonderful companions for your whole family with the right training."
          headingClassName="text-hero-tertiary"
          descriptionClassName="text-body-medium max-w-4xl"
        />

        {/* View all link */}
        <AnimateInView variants={fadeUp} className="flex justify-end mb-3">
          <Link
            href="/"
            className="text-body-small text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            View all listings
          </Link>
        </AnimateInView>

        {/* Category Cards - stagger when in view */}
        <AnimateInView variants={defaultStagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category) => (
            <motion.div key={category.id} variants={fadeUp} transition={defaultTransition}>
              <Link href={category.href} className="group flex flex-col items-center">
                {/* Image Container */}
                <div className="w-full rounded-2xl overflow-hidden mb-7">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Category Name */}
                <h3 className="text-display-medium text-foreground">{category.name}</h3>
              </Link>
            </motion.div>
          ))}
        </AnimateInView>
      </div>
    </section>
  );
}
