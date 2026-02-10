import Image from 'next/image';
import SectionHeader from '../ui/SectionHeader';

const features = [
  {
    id: 1,
    title: 'Verified Breeders',
    description: 'Every breeder undergoes thorough background checks and certification',
    icon: '/check.svg',
    width: 'max(40px,2.083vw)',
    height: 'max(40px,2.083vw)'
  },
  {
    id: 2,
    title: 'Secure Messaging',
    description: 'Strict breeding standards ensure healthy, well-cared-for animals',
    icon: '/shield.svg',
    width: 'max(30px,1.5625vw)',
    height: 'max(38px,1.9791666667vw)'
  },
  {
    id: 3,
    title: 'Reviewed & Rated',
    description: 'Expert team available around the clock to assist buyers and breeders.',
    icon: '/people.svg',
    width: 'max(48px,2.5vw)',
    height: 'max(48px,2.5vw)'
  }
];

export default function WhyTrustUs() {
  return (
    <section className="w-full bg-[#FCFCFD] section-padding-top-bottom">
      <div className="main-container">
        <SectionHeader
          title="Why buyers trust us"
          description="Whether you're browsing or selling, we've made it easy."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[max(23px,3.125vw)]">
          {features.map(feature => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center p-[max(30px,2.65625vw)] rounded-[max(20px,1.0416666667vw)] border border-border"
            >
              {/* Icon */}
              <div className="mb-[max(10px,0.5208333333vw)]" style={{ width: feature.width, height: feature.height }}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                  style={{ width: feature.width, height: feature.height }}
                />
              </div>

              {/* Title */}
              <h3 className="card-title-medium text-primary mb-[max(20px,1.0416666667vw)]">{feature.title}</h3>

              {/* Description */}
              <p className="text-body-medium max-w-[max(320px,17vw)] w-full">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
