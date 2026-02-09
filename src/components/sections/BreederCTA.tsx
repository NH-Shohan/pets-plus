import Image from "next/image";
import Link from "next/link";

/* 
  BreederCTA Section
  - Premium CTA card for breeders
  - Matches the design reference with a soft mint background
  - Fully responsive layout
*/

const BreederCTA = () => {
  return (
    <section className="bg-white section-padding-bottom font-jakarta">
      <div className="main-container">
        <div className="bg-[#F3FAF8] rounded-[20px] p-6 sm:p-10 lg:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-12  ">
          {/* Illustration - Left side */}
          <div className="shrink-0 max-w-[137px] w-full h-full relative">
            <Image
              src="/breeder.svg"
              alt="Breeder illustration"
              width={140}
              height={200}
              className="object-contain"
            />
          </div>

          {/* Content - Right side */}
          <div className="flex-1 space-y-4 text-center md:text-left">
            <h2 className="section-title--medium">
              Are you a responsible breeder?
            </h2>
            <p className="text-body-large">
              We&apos;d love to invite you to join our community of trusted
              breeders. We only list screened breeders and help connect you
              directly with educated, serious buyers.
            </p>
            <div>
              <Link
                href="/become-a-breeder"
                className="text-body-large font-bold underline underline-offset-8 decoration-2 hover:text-primary transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreederCTA;
