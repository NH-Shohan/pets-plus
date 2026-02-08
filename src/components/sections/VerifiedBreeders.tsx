'use client';

import AnimateInView from '@/components/ui/AnimateInView';
import Button from '@/components/ui/Button';
import { defaultStagger, defaultTransition, fadeInRight, fadeUp, scaleIn } from '@/lib/animations';
import type { MotionValue } from 'motion/react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import Image from 'next/image';
import { useCallback, useRef } from 'react';

function VerifiedBadge({ mouseX, mouseY }: { mouseX: MotionValue<number>; mouseY: MotionValue<number> }) {
  const springConfig = { stiffness: 80, damping: 22, mass: 0.5 };
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

  return (
    <motion.div
      className="absolute top-4 right-4 sm:top-10 sm:-right-4 lg:-right-40 bg-surface rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 pointer-events-none"
      variants={scaleIn}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ ...defaultTransition, delay: 0.25 }}
      style={{ x, y, willChange: 'transform' }}
    >
      <Image src="/check-circle.svg" alt="Verified" width={53} height={53} />
      <div>
        <p className="text-body-medium text-foreground leading-tight!">Verified Breeder</p>
        <p className="text-body-base">Health Guaranteed</p>
      </div>
    </motion.div>
  );
}

export default function VerifiedBreeders() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rafId = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });

  const handleSectionMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      targetRef.current = {
        x: (e.clientX - centerX) / rect.width,
        y: (e.clientY - centerY) / rect.height,
      };
      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(() => {
          rafId.current = null;
          mouseX.set(targetRef.current.x);
          mouseY.set(targetRef.current.y);
        });
      }
    },
    [mouseX, mouseY]
  );

  const handleSectionMouseLeave = useCallback(() => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section
      className="w-full bg-mint-subtle! section-padding-top-bottom overflow-hidden"
      onMouseMove={handleSectionMouseMove}
      onMouseLeave={handleSectionMouseLeave}
    >
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-52 items-center">
          {/* Left - Image */}
          <AnimateInView variants={fadeInRight} transition={defaultTransition} className="relative col-span-2">
            <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto">
              <Image
                src="/verified.png"
                alt="Verified breeder with puppy"
                width={500}
                height={400}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Verified Badge */}
            <VerifiedBadge mouseX={mouseX} mouseY={mouseY} />
          </AnimateInView>

          {/* Right - Content - stagger when in view */}
          <AnimateInView variants={defaultStagger} className="flex flex-col items-start gap-6 lg:col-span-3">
            <motion.h2
              className="text-hero-secondary text-foreground text-left!"
              variants={fadeUp}
              transition={defaultTransition}
            >
              Every member is carefully screened before joining.
            </motion.h2>

            <motion.p
              className="text-body-medium text-foreground max-w-lg text-left!"
              variants={fadeUp}
              transition={defaultTransition}
            >
              Every seller on our platform is carefully screened to help ensure authenticity, transparency, and
              responsible practices.
            </motion.p>

            <motion.div variants={fadeUp} transition={defaultTransition}>
              <Button variant="primary" size="default">
                Browse listings
              </Button>
            </motion.div>
          </AnimateInView>
        </div>
      </div>
    </section>
  );
}
