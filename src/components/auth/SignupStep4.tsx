'use client';

import Link from 'next/link';
import { Mail, FileCheck, Clock, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Mail,
    title: 'Email Notification',
    description: "You'll receive an email once your verification is approved or if we need additional information."
  },
  {
    icon: FileCheck,
    title: 'Document Review',
    description: 'Our team will verify your submitted documents within 1-2 business days.'
  },
  {
    icon: Clock,
    title: 'Action After Approval',
    description: 'Once approved, you can start listing your animals and connect with buyers.'
  }
];

export default function SignupStep4() {
  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-surface rounded-2xl border border-border shadow-sm p-8">
        <h1 className="text-2xl font-bold text-foreground mb-2">Breeder verification under review</h1>
        <p className="text-body-medium text-foreground/70 mb-8">
          Thank you for submitting your verification documents. Our team is reviewing your Breeder application.
        </p>

        <div className="bg-mint-faint rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-foreground mb-4">What happens next?</h2>
          <ul className="space-y-4">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="flex gap-3">
                  <span className="shrink-0 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground text-body-small">{item.title}</p>
                    <p className="text-body-small text-foreground/70 mt-0.5">{item.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="text-body-small text-foreground/70 mb-6">
          Estimated review time: 1-2 business days.
        </p>

        <Link
          href="/"
          className="w-full flex items-center justify-center gap-2 font-semibold text-body-medium bg-primary text-white hover:bg-primary-light py-3 px-5 rounded-xl transition-colors"
        >
          Browse listings while waiting <ArrowRight className="h-4 w-4" />
        </Link>

        <div className="mt-6 flex flex-wrap gap-4 text-body-small text-foreground/70">
          <a href="/help" className="text-primary hover:underline">Visit Help Center</a>
          <a href="/contact" className="text-primary hover:underline">Have questions? Contact Support</a>
        </div>
      </div>
    </div>
  );
}
