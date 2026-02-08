'use client';

import AnimateInView from '@/components/ui/AnimateInView';
import Button from '@/components/ui/Button';
import { defaultStagger, defaultTransition, fadeInRight, fadeUp } from '@/lib/animations';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-mint-faint">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center section-padding-top-bottom">
          {/* Left Content - stagger when in view */}
          <AnimateInView variants={defaultStagger} className="flex flex-col items-start gap-6 sm:gap-8 ">
            <motion.div className="relative" variants={fadeUp} transition={defaultTransition}>
              <h1 className="text-hero-primary">
                <span className="block">Browse</span>
                hundreds of listings
              </h1>
            </motion.div>

            <motion.p
              className="text-body-large text-foreground max-w-md"
              variants={fadeUp}
              transition={defaultTransition}
            >
              Connect directly with trusted breeders.
            </motion.p>

            <motion.div variants={fadeUp} transition={defaultTransition}>
              <Button variant="primary" size="default">
                Browse listings
              </Button>
            </motion.div>
          </AnimateInView>

          {/* Right Content - fade in from right when in view */}
          <AnimateInView
            variants={fadeInRight}
            transition={defaultTransition}
            className="relative  flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
              <div className="absolute top-4 right-4 sm:top-8 sm:right-8 w-[85%] h-[85%] bg-mint-subtle rounded-[32px] sm:rounded-[48px]" />
              <div className="relative z-10">
                <Image
                  src="/hero.png"
                  alt="Happy pet owner with their adorable pets"
                  width={600}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
