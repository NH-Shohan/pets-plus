import { Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-12 pb-6 font-jakarta border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8 md:gap-12 mb-12">
          {/* Brand Column - Wider for logo and description */}
          <div className="md:col-span-4 lg:col-span-3 space-y-6 md:space-y-8">
            <Link href="/">
              <Image src="/logo-1.svg" alt="Pets&Plus" width={242} height={60} className="w-auto" priority />
            </Link>

            <div className="space-y-4">
              <p className="text-paragraph text-sm leading-relaxed max-w-sm mt-5">
                Connecting loving families with verified breeders since 2020.
              </p>

              <p className="text-paragraph text-sm leading-relaxed max-w-sm">Miami, FL</p>
            </div>

            {/* Social Icons with animated hover circles */}
            <div className="flex gap-5">
              {[
                { icon: '/facebook.svg', label: 'Facebook' },
                { icon: '/instagram.svg', label: 'Instagram' },
                { icon: '/pinterest.svg', label: 'Pinterest' },
                { icon: '/youtube.svg', label: 'Youtube' },
              ].map((social, idx) => (
                <Link key={idx} href="#" aria-label={social.label}>
                  <Image src={social.icon} alt={social.label} width={20} height={20} />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Columns - Responsive grid */}
          <div className="md:col-span-4 lg:col-span-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Marketplace Column */}
            <div className="space-y-6">
              <h4 className="text-base font-bold text-paragraph">Marketplace</h4>
              <ul className="space-y-4 text-sm">
                {['Browse Listings', 'Find Breeders', 'Pricing'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-paragraph text-sm font-light inline-block">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-6">
              <h4 className="text-base font-bold text-paragraph">Company</h4>
              <ul className="space-y-4 text-sm">
                {['About Us', 'Contact', 'Careers'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-paragraph text-sm font-light inline-block">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sellers Column */}
            <div className="space-y-6">
              <h4 className="text-base font-bold text-paragraph">Sellers</h4>
              <ul className="space-y-4 text-sm">
                {['Sign Up', 'Become a Seller', 'Seller Guidelines', 'Seller FAQ', 'Trust & Verification'].map(
                  (link) => (
                    <li key={link}>
                      <Link href="#" className="text-paragraph text-sm font-light inline-block">
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Support Column */}
            <div className="space-y-6">
              <h4 className="text-base font-bold text-paragraph">Support</h4>
              <ul className="space-y-4 text-sm">
                {['Help Center', 'Safety Tips', 'Report an Issue'].map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-paragraph text-sm font-light inline-block">
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-6">
              <h4 className="text-base font-bold text-paragraph">Legal</h4>
              <ul className="space-y-4 text-sm">
                {['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Breeder Agreement', 'Buyer Protection'].map(
                  (link) => (
                    <li key={link}>
                      <Link href="#" className="text-paragraph text-sm font-light inline-block">
                        {link}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Refined with subtle border and better hierarchy */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-paragraph text-xs tracking-wide">© {currentYear} Pets & Plus. All rights reserved.</p>
          </div>

          <p className="text-paragraph text-xs tracking-wide flex items-center gap-1">
            Made with {<Heart size={16} className="text-red-400" />} for pet lovers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
