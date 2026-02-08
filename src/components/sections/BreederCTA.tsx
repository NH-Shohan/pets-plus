"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import AnimateInView from "@/components/ui/AnimateInView";
import { defaultStagger, defaultTransition, fadeUp, fadeInRight } from "@/lib/animations";

/* 
  BreederCTA Section
  - Premium CTA card for breeders
  - Matches the design reference with a soft mint background
  - Fully responsive layout
*/

const BreederCTA = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 font-jakarta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView
          variants={defaultStagger}
          className="bg-mint-faint rounded-4xl p-6 sm:p-10 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12"
        >
          {/* Illustration - Left side */}
          <motion.div
            variants={fadeInRight}
            transition={defaultTransition}
            className="shrink-0 w-32 h-32 md:w-48 md:h-48 relative"
          >
            <Image
              src="/breeder.svg"
              alt="Breeder illustration"
              fill
              className="object-contain"
            />
          </motion.div>

          {/* Content - Right side */}
          <motion.div
            variants={fadeUp}
            transition={defaultTransition}
            className="flex-1 space-y-4 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
              Are you a responsible breeder?
            </h2>
            <p className="text-foreground text-lg leading-relaxed">
              We&apos;d love to invite you to join our community of trusted breeders.
              We only list screened breeders and help connect you directly with
              educated, serious buyers.
            </p>
            <div>
              <Link
                href="/become-a-breeder"
                className="text-foreground font-bold text-xl underline underline-offset-8 decoration-2 hover:text-primary transition-colors"
              >
                Learn more
              </Link>
            </div>
          </motion.div>
        </AnimateInView>
      </div>
    </section>
  );
};

export default BreederCTA;
