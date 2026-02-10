import Image from 'next/image';
import Link from 'next/link';

const BreederCTA = () => {
  return (
    <section className="bg-white section-padding-bottom font-jakarta">
      <div className="main-container">
        <div className="bg-[#F3FAF8] rounded-[max(20px,1.0416666667vw)] p-[max(40px,3.125vw)] flex flex-col md:flex-row items-center gap-[max(30px,2.8125vw)]">
          {/* Illustration - Left side */}
          <div className="h-full relative">
            <Image
              src="/breeder.svg"
              alt="Breeder illustration"
              width={140}
              height={200}
              className="object-contain w-[max(122px,7.29vw)]"
            />
          </div>

          {/* Content - Right side */}
          <div className="flex-1 space-y-[max(20px,1.0416666667vw)] text-left">
            <h2 className="section-title--medium">Are you a responsible breeder?</h2>
            <p className="text-body-large">
              We&apos;d love to invite you to join our community of trusted breeders. We only list screened breeders and
              help connect you directly with educated, serious buyers.
            </p>
            <div>
              <Link
                href="/"
                className="card-title-normal font-bold underline underline-offset-8 decoration-2 hover:text-primary transition-colors"
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
