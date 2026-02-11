'use client';

import type { UseFormReturn } from 'react-hook-form';
import type { SignupFormValues } from '@/lib/validations/signup';
import { PawPrint } from 'lucide-react';
import { CheckCircle } from '@/components/icons/CheckCircle';
import { OutlineHeart } from '@/components/icons/OutlineHeart';
import { cn } from '@/lib/utils';

const options = [
  {
    value: 'buyer' as const,
    title: "I'm a Buyer",
    description: 'Find your perfect companion from trusted breeders.',
    bullets: ['Browse verified breeders', 'Health guarantees', 'Secure communication'],
    icon: OutlineHeart,
    iconClassName: ' w-[max(32px,1.67vw)] h-[max(32px,1.67vw)]'
  },
  {
    value: 'breeder' as const,
    title: "I'm a Breeder",
    description: 'Connect with loving families for your animals.',
    bullets: ['Showcase your breeding program', 'Manage litters & inquiries', 'Build your reputation'],
    icon: PawPrint,
    iconClassName: ' w-[max(32px,1.67vw)] h-[max(32px,1.67vw)]'
  }
];

export default function SignupStep1({ form }: { form: UseFormReturn<SignupFormValues> }) {
  const { register, watch, setValue } = form;
  const selected = watch('role');

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {options.map(opt => {
        const Icon = opt.icon;
        const isSelected = selected === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setValue('role', opt.value, { shouldValidate: true })}
            className={cn(
              'relative text-left p-[max(40px,2.1vw)] rounded-[max(20px,1.04vw)] transition-all',
              isSelected
                ? 'border-primary bg-[#EDF8F7] border-2'
                : ' bg-white hover:border-foreground/20 shadow-[#D8D8E54D'
            )}
          >
            {isSelected && (
              <span className="absolute top-4 right-4 text-primary">
                <CheckCircle />
              </span>
            )}
            <div
              className={`w-[max(72px,3.8vw)] h-[max(72px,3.8vw)] flex justify-center items-center rounded-[max(20px,1.04vw)] mb-[max(24px,1.25vw)] ${isSelected ? 'bg-transparent' : 'bg-[#F6F6F6]'}`}
            >
              <Icon className={cn('h-8 w-8 text-primary', opt.iconClassName)} />
            </div>
            <h3 className="font-bold text-[max(36px,1.9vw)] text-foreground mb-[max(24px,1.25vw)] ">{opt.title}</h3>
            <p className="text-body-medium text-[#676F7E] mb-5">{opt.description}</p>
            <ul className="space-y-1 text-body-medium text-[#676F7E]">
              {opt.bullets.map(b => (
                <li key={b}>• &nbsp;&nbsp;{b}</li>
              ))}
            </ul>
          </button>
        );
      })}
      <input type="hidden" {...register('role')} />
    </div>
  );
}
