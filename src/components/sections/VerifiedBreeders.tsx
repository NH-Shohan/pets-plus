'use client';

import Button from '@/components/ui/Button';
import SectionHeader from '@/components/ui/SectionHeader';
import Image from 'next/image';

function VerifiedBadge() {
  return (
    <div className="absolute bottom-[-12%] translate-y-[-20%] lg:translate-y-[0.5vw] 2xl:translate-y-[3vw] left-1/2 -translate-x-1/2 lg:top-4 lg:left-auto lg:translate-x-[-12vw] lg:-right-[22vw] 2xl:translate-x-[-14vw] 2xl:-right-[24vw] lg:bottom-auto w-max max-w-[calc(100%-2rem)] bg-surface rounded-[max(14px,0.7291666667vw)] p-[max(20px,1.0416666667vw)] flex items-center gap-[max(18px,0.9375vw)] pointer-events-none shrink-0">
      <Image
        src="/check-circle.svg"
        alt="Verified"
        width={53}
        height={53}
        className="w-[max(53px,2.7604166667vw)] h-[max(53px,2.7604166667vw)]"
      />
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
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-y-16 lg:gap-x-[max(6vw,38px)] xl:gap-x-[max(38px,8.17vw)] items-center">
          {/* Left - Image */}
          <div className="relative col-span-3">
            <div className="relative rounded-[max(20px,1.0416666667vw)] overflow-hidden aspect-4/6 sm:aspect-square lg:aspect-auto">
              <Image
                src="/breeder.avif"
                alt="Verified breeder with puppy"
                width={500}
                height={400}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <VerifiedBadge />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col items-center lg:text-left text-center lg:items-start lg:col-span-4 min-w-0 w-full lg:mt-[60px]">
            <SectionHeader
              title="Every member is carefully screened before joining."
              description="Every seller on our platform is carefully screened to help ensure authenticity, transparency, and responsible practices."
              headingClassName="section-title text-foreground -ml-[0.24vw]"
              containerClassName="lg:items-start lg:text-left margin-bottom-lg"
            />
            <Button variant="primary" size="default">
              Browse listings
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
