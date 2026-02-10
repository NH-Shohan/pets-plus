'use client';

import Image from 'next/image';
import Link from 'next/link';

const SOCIAL_LINKS = [
  { icon: '/pinterest.svg', label: 'Pinterest', href: '#' },
  { icon: '/facebook.svg', label: 'Facebook', href: '#' },
  { icon: '/instagram.svg', label: 'Instagram', href: '#' },
  { icon: '/youtube.svg', label: 'Youtube', href: '#' }
];

const FOOTER_SECTIONS = [
  {
    title: 'Marketplace',
    links: ['Browse Listings', 'Find Breeders', 'Pricing']
  },
  {
    title: 'Company',
    links: ['About Us', 'Contact', 'Careers']
  },
  {
    title: 'Sellers',
    links: ['Sign Up', 'Become a Seller', 'Seller Guidelines', 'Seller FAQ', 'Trust & Verification']
  },
  {
    title: 'Support',
    links: ['Help Center', 'Safety Tips', 'Report an Issue']
  },
  {
    title: 'Legal',
    links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Breeder Agreement', 'Buyer Protection']
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const linkClassName =
    "relative inline-block w-fit text-paragraph text-body-small transition-colors duration-300 hover:text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:scale-x-0 after:origin-left after:bg-white after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <footer className="bg-primary-dark text-white footer-padding-top">
      <div className="main-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12  gap-[70px] md:gap-12 mb-7 md:mb-12">
          {/* Brand Column - Wider for logo and description */}
          <div className="md:col-span-4 lg:col-span-4  flex flex-col sm:items-start items-center text-center sm:text-left ">
            <Link href="/">
              <Image src="/logo-1.svg" alt="Pets&Plus" width={242} height={60} className="w-auto" priority />
            </Link>

            <div className="mb-5">
              <p className="text-paragraph text-body-small leading-[1.8]! sm:max-w-[max(335px,18vw)] mt-4">
                Connecting loving families with verified breeders since 2020.
              </p>

              <p className="text-paragraph text-body-small mt-5 sm:hidden block">Miami, FL</p>
            </div>

            {/* Social Icons with animated hover circles */}
            <div className="flex gap-5">
              {SOCIAL_LINKS.map(social => (
                <Link key={social.label} href={social.href} aria-label={social.label}>
                  <Image src={social.icon} alt={social.label} width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns - Responsive grid */}
          <div className="md:col-span-4 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {FOOTER_SECTIONS.map(section => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-body-medium font-bold!">{section.title}</h4>
                <ul className="space-y-4 text-body-small font-light!">
                  {section.links.map(link => (
                    <li key={link}>
                      <Link href="#" className={linkClassName}>
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar - Refined with subtle border and better hierarchy */}
        <div className="border-t border-[#2C413C] py-6 xl:py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-paragraph text-body-extra-small">© {currentYear} Pets & Plus. All rights reserved.</p>
          </div>

          <p className="text-paragraph text-body-extra-small flex items-center gap-1">
            Made with <Image src="/heart.svg" alt="Heart" width={16} height={16} className="inline-block" /> for pet
            lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
