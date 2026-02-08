'use client';

import AnimateInView from '@/components/ui/AnimateInView';
import { defaultStagger, defaultTransition, fadeUp } from '@/lib/animations';
import { Heart } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

const SOCIAL_LINKS = [
  { icon: '/facebook.svg', label: 'Facebook', href: '#' },
  { icon: '/instagram.svg', label: 'Instagram', href: '#' },
  { icon: '/pinterest.svg', label: 'Pinterest', href: '#' },
  { icon: '/youtube.svg', label: 'Youtube', href: '#' },
];

const FOOTER_SECTIONS = [
  {
    title: 'Marketplace',
    links: ['Browse Listings', 'Find Breeders', 'Pricing'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Contact', 'Careers'],
  },
  {
    title: 'Sellers',
    links: ['Sign Up', 'Become a Seller', 'Seller Guidelines', 'Seller FAQ', 'Trust & Verification'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Safety Tips', 'Report an Issue'],
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Breeder Agreement', 'Buyer Protection'],
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linkClassName =
    "relative inline-block w-fit text-paragraph text-body-xs transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-1.5 after:h-px after:w-full after:scale-x-0 after:origin-left after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6 font-jakarta border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Brand Column - Wider for logo and description */}
          <div className="md:col-span-4 lg:col-span-4 space-y-2 md:space-y-8">
            <Link href="/">
              <Image src="/logo-1.svg" alt="Pets&Plus" width={242} height={60} className="w-auto" priority />
            </Link>

            <div className="space-y-2">
              <p className="text-paragraph leading-[180%]! text-body-xs max-w-84 mt-5">
                Connecting loving families with verified breeders since 2020.
              </p>

              <p className="text-paragraph text-body-xs max-w-sm">Miami, FL</p>
            </div>

            {/* Social Icons with animated hover circles */}
            <div className="flex gap-5">
              {SOCIAL_LINKS.map((social) => (
                <Link key={social.label} href={social.href} aria-label={social.label}>
                  <Image src={social.icon} alt={social.label} width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns - Responsive grid */}
          <AnimateInView
            variants={defaultStagger}
            className="md:col-span-4 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
          >
            {FOOTER_SECTIONS.map((section) => (
              <motion.div key={section.title} variants={fadeUp} transition={defaultTransition} className="space-y-2">
                <h4 className="text-heading-medium text-left! text-paragraph">{section.title}</h4>
                <ul className="space-y-0 text-sm">
                  {section.links.map((link) => (
                    <li key={link}>
                      <Link href="#" className={linkClassName}>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimateInView>
        </div>

        {/* Bottom Bar - Refined with subtle border and better hierarchy */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-paragraph text-xs tracking-wide">© {currentYear} Pets & Plus. All rights reserved.</p>
          </div>

          <p className="text-paragraph text-xs tracking-wide flex items-center gap-1">
            Made with <Heart size={16} className="text-red-400" /> for pet lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
