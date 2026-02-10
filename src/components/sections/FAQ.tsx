'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';

const faqData = [
  {
    question: 'Do you sell the animals directly?',
    answer:
      'No, Pets&Plus is a marketplace that connects buyers with verified breeders. We facilitate the discovery and connection process, but the actual transaction and care transfer happen between you and the breeder.'
  },
  {
    question: 'How do I know breeders are real?',
    answer:
      'Every breeder on our platform goes through a screening process before being approved. We review profiles to help ensure authenticity and responsible practices.'
  },
  {
    question: 'Is my personal information safe?',
    answer:
      'Absolutely. We use industry-standard encryption and security protocols to protect your data. We never share your personal information with third parties without your explicit consent.'
  },
  {
    question: 'Can I browse without creating an account?',
    answer:
      'Yes, you can browse all listings and breeder profiles without an account. However, you will need to create a free account to contact breeders or save your favorite listings.'
  },
  {
    question: 'Are there any fees for buyers?',
    answer:
      'Browsing and contacting breeders on Pets&Plus is completely free for buyers. We do not charge any commission or service fees to those looking for their next pet.'
  },
  {
    question: 'What if I have a problem with a breeder?',
    answer:
      'We take all reports seriously. If you encounter any issues, our support team is here to help mediate and investigate. We maintain strict community guidelines to ensure a safe environment.'
  },
  {
    question: 'Do you guarantee the listings?',
    answer:
      'While we verify breeders, we recommend all buyers perform their own due diligence, visit the breeder in person when possible, and ask for health certifications. We provide the tools to help you make an informed decision.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null); // Defaulting to the second item open as per design reference

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white section-padding-bottom font-jakarta">
      <div className="main-container">
        <SectionHeader
          title="Frequently asked questions"
          description="Whether you're browsing or selling, we've made it easy."
          descriptionClassName="sm:block hidden "
        />

        <div className="space-y-[max(12px,1.25vw)]">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white rounded-[2.5rem] border transition-all duration-300 ${
                openIndex === index ? 'border-foreground' : ''
              }`}
              style={{
                borderColor: openIndex === index ? undefined : 'var(--color-border)',
                ...(openIndex !== index &&
                  ({
                    '--tw-shadow-color': 'var(--color-surface-light)'
                  } as React.CSSProperties))
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between py-[max(20px,2.0833333333vw)] gap-x-2 px-[max(40px,2.7083333333vw)] text-left outline-none cursor-pointer transition-[padding] duration-300 ease-out ${openIndex === index ? 'pb-[max(10px,0.5208333333vw)]' : ''}`}
              >
                <span
                  className="card-title-normal transition-colors duration-300"
                  style={{
                    color: openIndex === index ? 'var(--color-foreground)' : 'var(--color-foreground)'
                  }}
                >
                  {faq.question}
                </span>
                <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown
                    size={24}
                    style={{
                      color: openIndex === index ? 'var(--color-foreground)' : 'var(--color-light)'
                    }}
                  />
                </div>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className=" px-[max(40px,2.7083333333vw)] pb-[max(20px,2.0833333333vw)] text-[#3A3A3A] md:pb-[max(40px,2.7083333333vw)] text-[max(14px,1.0416666667vw)] leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
