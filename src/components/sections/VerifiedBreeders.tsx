'use client';

import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';

function VerifiedBadge() {
  return (
    <div className="absolute bottom-[-8%] translate-y-[-20%] lg:translate-y-[50%] left-1/2 -translate-x-1/2 lg:top-4 lg:left-auto lg:translate-x-[-60%] lg:-right-[60%] 2xl:translate-x-[-70%] 2xl:-right-[70%] lg:bottom-auto w-max max-w-[calc(100%-2rem)] bg-surface rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 pointer-events-none shrink-0">
      <Image src="/check-circle.svg" alt="Verified" width={53} height={53} />
      <div>
        <p className="text-body-large text-foreground font-bold">Verified Breeder</p>
        <p className="text-body-base">Health Guaranteed</p>
      </div>
    </div>
  );
}

export default function VerifiedBreeders() {
  return (
    <section className="w-full bg-mint-subtle! section-padding-top-bottom">
      <div className="main-container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-16 lg:gap-x-[max(6vw,38px)] xl:gap-x-[max(38px,8.17vw)] items-center">
          {/* Left - Image */}
          <div className="relative col-span-2">
            <div className="relative rounded-3xl overflow-hidden aspect-4/6 sm:aspect-square lg:aspect-auto">
              <Image
                src="/verified.png"
                alt="Verified breeder with puppy"
                width={500}
                height={400}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <VerifiedBadge />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col sm:max-w-[max(650px,36.40vw)] max-w-[342px] items-center lg:text-left text-center lg:items-start gap-6 lg:col-span-3 min-w-0 w-full lg:mt-[60px]">
            <SectionHeader
              title="Every member is carefully screened before joining."
              description="Every seller on our platform is carefully screened to help ensure authenticity, transparency, and responsible practices."
              headingClassName="section-title text-foreground"
              descriptionClassName="text-body-medium text-foreground"
              containerClassName="lg:items-start lg:text-left "
            />
            <div>
              <Button variant="primary" size="default">
                Browse listings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
