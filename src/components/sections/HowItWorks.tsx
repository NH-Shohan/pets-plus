"use client";

import Image from "next/image";
import { motion } from "motion/react";
import AnimateInView from "@/components/ui/AnimateInView";
import { defaultStagger, defaultTransition, fadeUp } from "@/lib/animations";

const steps = [
  {
    id: 1,
    title: "Browse",
    description:
      "Search through thousands of verified listings from trusted breeders. Filter by breed, location, price, and more to find your perfect match.",
    image: "/sitting-man.png",
  },
  {
    id: 2,
    title: "Connect",
    description:
      "Message breeders directly to ask questions about health, temperament, and care. Schedule visits or video calls to meet your future companion.",
    image: "/sitting-man.png",
  },
  {
    id: 3,
    title: "Welcome",
    description:
      "Complete your purchase with secure payment processing, health guarantees, and full buyer protection. Welcome your new family member home!",
    image: "/sitting-man.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-24">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimateInView
          variants={fadeUp}
          transition={defaultTransition}
          className="flex flex-col items-center text-center mb-12 sm:mb-16"
        >
          <h2 className="text-hero-secondary text-foreground mb-4">
            How it works
          </h2>
          <p className="text-body-medium text-foreground">
            Whether you&apos;re browsing or selling, we&apos;ve made it easy.
          </p>
        </AnimateInView>

        {/* Steps - stagger when in view */}
        <AnimateInView
          variants={defaultStagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={fadeUp}
              transition={defaultTransition}
              className="flex flex-col items-center text-center"
            >
              {/* Image */}
              <div className="mb-6">
                <Image
                  src={step.image}
                  alt={step.title}
                  width={255}
                  height={255}
                  className="w-auto h-40 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-display-small text-foreground mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-body-base text-foreground max-w-[300px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </AnimateInView>
      </div>
    </section>
  );
}
