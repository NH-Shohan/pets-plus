"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";

function VerifiedBadge() {
  return (
    <div className="absolute top-4 right-4 sm:top-10 sm:-right-4 lg:-right-40 bg-surface rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 pointer-events-none">
      <Image src="/check-circle.svg" alt="Verified" width={53} height={53} />
      <div>
        <p className="text-body-medium text-foreground leading-tight!">
          Verified Breeder
        </p>
        <p className="text-body-base">Health Guaranteed</p>
      </div>
    </div>
  );
}

export default function VerifiedBreeders() {
  return (
    <section className="w-full bg-mint-subtle! section-padding-top-bottom overflow-hidden">
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-52 items-center">
          {/* Left - Image */}
          <div className="relative col-span-2">
            <div className="relative rounded-3xl overflow-hidden aspect-square lg:aspect-auto">
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
          <div className="flex flex-col items-start gap-6 lg:col-span-3">
            <h2 className="text-hero-secondary text-foreground text-left!">
              Every member is carefully screened before joining.
            </h2>

            <p className="text-body-medium text-foreground max-w-lg text-left!">
              Every seller on our platform is carefully screened to help ensure
              authenticity, transparency, and responsible practices.
            </p>

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
