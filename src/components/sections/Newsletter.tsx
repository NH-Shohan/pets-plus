"use client";

import AnimateInView from "@/components/ui/AnimateInView";
import {
  defaultStagger,
  defaultTransition,
  fadeIn,
  fadeUp,
  scaleIn,
} from "@/lib/animations";
import { motion } from "motion/react";

/* 
  Newsletter Section
  - Premium subscription card with a teal gradient background
  - Integrated input and button design
  - Responsive and accessible
  - Animated on scroll: card scale-in, content staggered fade-up
*/

const Newsletter = () => {
  return (
    <section className="bg-white section-padding-bottom font-jakarta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView
          variants={scaleIn}
          transition={defaultTransition}
          viewport={{ once: true, amount: 0.2 }}
          className="relative bg-primary rounded-4xl px-6 py-16 sm:px-8 sm:py-20 md:px-16 md:py-24 text-center text-white shadow-2xl shadow-teal-900/10"
        >
          <AnimateInView
            variants={defaultStagger}
            viewport={{ once: true, amount: 0.2 }}
            className="relative z-10 max-w-2xl mx-auto space-y-4"
          >
            <motion.div
              variants={fadeUp}
              transition={defaultTransition}
              className="space-y-3"
            >
              <h2 className="text-display-large">Never miss a new listing</h2>
              <p className="text-body-medium">
                Be the first to know when verified breeders list new pets
              </p>
            </motion.div>

            <motion.form
              variants={fadeUp}
              transition={defaultTransition}
              className="mt-8 max-w-xl mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="relative flex flex-col sm:flex-row items-center p-1 bg-white rounded-2xl sm:rounded-full shadow-lg">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full sm:flex-1 px-8 py-4 bg-transparent text-foreground placeholder-foreground outline-none font-light text-base"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-primary text-white font-bold rounded-xl sm:rounded-full uppercase tracking-wider text-sm transition-transform active:scale-95"
                >
                  SUBSCRIBE
                </button>
              </div>
            </motion.form>

            <motion.p
              variants={fadeIn}
              transition={defaultTransition}
              className="text-accent-small opacity-80 pt-2 max-w-lg mx-auto"
            >
              We respect your privacy. Your email address will only be used to
              send you updates and offers. We do not sell or share your
              information with third parties.
            </motion.p>
          </AnimateInView>
        </AnimateInView>
      </div>
    </section>
  );
};

export default Newsletter;
