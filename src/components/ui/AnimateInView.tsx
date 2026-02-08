'use client';

import { motion, type Variants } from 'motion/react';
import {
  defaultTransition,
  defaultViewport,
  type ViewportOptions,
} from '@/lib/animations';

type MotionTag = keyof typeof motion;

export interface AnimateInViewProps {
  children: React.ReactNode;
  /** Variants with `initial` and `animate` (e.g. fadeUp, fadeInRight from @/lib/animations) */
  variants?: Variants;
  /** Optional overrides for transition (default: defaultTransition from lib) */
  transition?: typeof defaultTransition & { delay?: number };
  /** When to trigger (default: once true, amount 0.2) */
  viewport?: ViewportOptions;
  /** Root element type (default: div) */
  as?: MotionTag;
  className?: string;
}

/**
 * Wraps content and runs the given animation when the element enters the viewport.
 * Reuse across Hero, Categories, FAQ, etc. for consistent in-view animations.
 */
export default function AnimateInView({
  children,
  variants = { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } },
  transition = defaultTransition,
  viewport = defaultViewport,
  as: Tag = 'div',
  className,
}: AnimateInViewProps) {
  const Component = motion[Tag] as typeof motion.div;
  return (
    <Component
      initial="initial"
      whileInView="animate"
      viewport={viewport}
      variants={variants}
      transition={transition}
      className={className}
    >
      {children}
    </Component>
  );
}
