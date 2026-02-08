"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

/* 
  FAQ Section
  - Interactive accordion component
  - Clean, minimalist aesthetic with subtle shadows and borders
  - No scroll animation so content is static when you reach it
*/

const faqData = [
  {
    question: "Do you sell the animals directly?",
    answer:
      "No, Pets&Plus is a marketplace that connects buyers with verified breeders. We facilitate the discovery and connection process, but the actual transaction and care transfer happen between you and the breeder.",
  },
  {
    question: "How do I know breeders are real?",
    answer:
      "Every breeder on our platform goes through a screening process before being approved. We review profiles to help ensure authenticity and responsible practices.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Absolutely. We use industry-standard encryption and security protocols to protect your data. We never share your personal information with third parties without your explicit consent.",
  },
  {
    question: "Can I browse without creating an account?",
    answer:
      "Yes, you can browse all listings and breeder profiles without an account. However, you will need to create a free account to contact breeders or save your favorite listings.",
  },
  {
    question: "Are there any fees for buyers?",
    answer:
      "Browsing and contacting breeders on Pets&Plus is completely free for buyers. We do not charge any commission or service fees to those looking for their next pet.",
  },
  {
    question: "What if I have a problem with a breeder?",
    answer:
      "We take all reports seriously. If you encounter any issues, our support team is here to help mediate and investigate. We maintain strict community guidelines to ensure a safe environment.",
  },
  {
    question: "Do you guarantee the listings?",
    answer:
      "While we verify breeders, we recommend all buyers perform their own due diligence, visit the breeder in person when possible, and ask for health certifications. We provide the tools to help you make an informed decision.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1); // Defaulting to the second item open as per design reference

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-24 font-jakarta">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-hero-secondary text-foreground mb-4 font-extrabold tracking-tight">
            Frequently asked questions
          </h2>
          <p className="text-body-medium text-foreground">
            Whether you&apos;re browsing or selling, we&apos;ve made it easy.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`group bg-white rounded-3xl border transition-all duration-300 ${
                openIndex === index
                  ? "border-foreground shadow-xl shadow-gray-200/50"
                  : "border-gray-100 hover:border-gray-200 hover:shadow-md"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
              >
                <span
                  className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                    openIndex === index ? "text-foreground" : "text-gray-700"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                >
                  <ChevronDown
                    size={24}
                    className={
                      openIndex === index ? "text-foreground" : "text-gray-400"
                    }
                  />
                </div>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="min-h-0 overflow-hidden">
                  <div className="px-6 md:px-8 pb-8 text-gray-500 text-base leading-relaxed md:text-lg">
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
