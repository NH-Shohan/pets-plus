/**
 * Shared animation variants and config for view-triggered animations.
 * Use with AnimateInView so animations run when the element enters the viewport.
 */

export const defaultTransition = {
  type: 'tween' as const,
  duration: 0.6,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export const defaultViewport = {
  once: true,
  amount: 0.2,
} as const;

export type ViewportOptions = {
  once?: boolean;
  amount?: number;
  margin?: string;
};

/** Fade in and move up (good for text, cards) */
export const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

/** Fade in and move from right (good for images, side content) */
export const fadeInRight = {
  initial: { opacity: 0, x: 32 },
  animate: { opacity: 1, x: 0 },
};

/** Fade in and move up slightly (good for overlays, images) */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

/** Fade in with scale (good for decorative shapes, icons) */
export const scaleIn = {
  initial: { opacity: 0, scale: 0.92 },
  animate: { opacity: 1, scale: 1 },
};

/** Fade in only */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

/** Stagger container: use as parent variants so children animate in sequence */
export const staggerContainer = (staggerChildren = 0.12, delayChildren = 0.08) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/** Default stagger config for consistent use across components */
export const defaultStagger = staggerContainer(0.12, 0.08);
