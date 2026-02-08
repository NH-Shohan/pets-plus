'use client';

import AnimateInView from '@/components/ui/AnimateInView';
import { defaultStagger, defaultTransition, fadeUp } from '@/lib/animations';
import { motion } from 'motion/react';
import Link from 'next/link';

/* 
  PopularBreeds Section
  - Premium directory-style section for SEO and navigation
  - Responsive multi-column layout
  - Clean, minimalist aesthetic following Pets&Plus brand
  - Animated on scroll: heading fade-up, category cards stagger in
*/

const breedData = [
  {
    title: 'Pets',
    link: '/breeds/pets',
    items: [
      'Dogs',
      'Cats',
      'Birds',
      'Rabbits',
      'Hamsters',
      'Guinea pigs',
      'Gerbils',
      'Mice & Rats',
      'Ferrets',
      'Chinchillas',
      'Hedgehogs',
      'Sugar gliders',
      'Turtles',
      'Lizards',
      'Snakes',
      'Frogs',
      'Mini pigs',
    ],
  },
  {
    title: 'Farm & Livestock',
    link: '/breeds/farm',
    items: [
      'Horses',
      'Ponies',
      'Cows (Cattle)',
      'Bulls',
      'Goats',
      'Sheep',
      'Pigs',
      'Chickens',
      'Ducks',
      'Turkeys',
      'Geese',
      'Quail',
      'Donkeys',
      'Mules',
      'Alpacas',
      'Llamas',
    ],
  },
  {
    title: 'Exotic Species',
    link: '/breeds/exotic',
    items: [
      'Snakes',
      'Lizards',
      'Chameleons',
      'Turtles',
      'Tortoises',
      'Parrots',
      'Macaws',
      'Cockatoos',
      'Freshwater tropical fish',
      'Saltwater reef fish',
      'Shrimp',
      'Snails',
      'Crayfish',
      'Corals',
      'Degus',
      'Hedgehogs',
    ],
  },
];

const PopularBreeds = () => {
  return (
    <section className="bg-[#F8F8F8] section-padding-top-bottom font-jakarta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateInView variants={fadeUp} transition={defaultTransition} className="mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
            Learn more about our popular breeds
          </h2>
        </AnimateInView>

        <AnimateInView
          variants={defaultStagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 items-stretch"
        >
          {breedData.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              transition={defaultTransition}
              className="flex flex-col h-full space-y-4"
            >
              <h3 className="text-xl font-bold text-foreground">{category.title}</h3>

              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {category.items.map((item) => (
                  <Link
                    key={item}
                    href={`/breeds/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="relative inline-block w-fit max-w-full text-foreground text-base font-light truncate transition-colors duration-300 hover:text-primary after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:origin-left after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    {item}
                  </Link>
                ))}
              </div>

              <div className="mt-auto pt-4">
                <Link href={category.link} className="text-primary font-normal text-base underline">
                  view all {category.title.toLowerCase()}
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimateInView>
      </div>
    </section>
  );
};

export default PopularBreeds;
