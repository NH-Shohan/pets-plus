"use client";

import AnimateInView from "@/components/ui/AnimateInView";
import SectionHeader from "@/components/ui/SectionHeader";
import { defaultStagger, defaultTransition, fadeUp } from "@/lib/animations";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    id: 1,
    name: "Pets & Companions",
    image: "/category-1.png",
    href: "/",
  },
  {
    id: 2,
    name: "Farm & Livestock",
    image: "/category-2.png",
    href: "/",
  },
  {
    id: 3,
    name: "Exotic Species",
    image: "/category-3.png",
    href: "/",
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
        <AnimateInView
          variants={fadeUp}
          className="flex justify-end mb-[27px] mr-6"
        >
          <Link
            href="/"
            className="text-body-small text-foreground underline underline-offset-4 hover:text-primary transition-colors"
          >
            View all listings
          </Link>
        </AnimateInView>

        {/* Category Cards - stagger when in view */}
        <AnimateInView
          variants={defaultStagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={fadeUp}
              transition={defaultTransition}
            >
              <Link
                href={category.href}
                className="group flex flex-col items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-2xl"
              >
                {/* Image Container - shadow lift, image zoom inside frame */}
                <motion.div
                  className="w-full rounded-2xl overflow-hidden mb-5 lg:mb-7  bg-surface-light shadow-none"
                  whileHover={{
                    boxShadow:
                      "0 12px 24px -8px rgba(0, 0, 0, 0.08), 0 4px 12px -4px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <motion.div
                    className="w-full aspect-4/5 overflow-hidden"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={400}
                      height={500}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>

                {/* Category Name */}
                <h3 className="text-display-medium text-foreground transition-colors duration-300 ease-out group-hover:text-primary">
                  {category.name}
                </h3>
              </Link>
            </motion.div>
          ))}
        </AnimateInView>
      </div>
    </section>
  );
}
