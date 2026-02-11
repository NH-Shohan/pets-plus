'use client';

import type { UseFormReturn } from 'react-hook-form';
import type { SignupFormValues } from '@/lib/validations/signup';
import StepIndicator from './StepIndicator';
import CreateAccountStep from './CreateAccountStep';
import Button from '@/components/ui/Button';
import { ArrowRight } from '@/components/icons/ArrowRight';

const BUYER_TOTAL_STEPS = 2;

type Props = {
  form: UseFormReturn<SignupFormValues>;
  currentStep: number;
  onBack: () => void;
  onContinue: () => void;
};

/**
 * Buyer signup flow: Create account (shared step from image 2) → Done.
 */
export default function BuyerSignupForm({ form, currentStep, onBack, onContinue }: Props) {
  if (currentStep !== 2) return null;

  return (
    <div>
      <div className="text-center">
        <h1 className="section-title--medium text-foreground mb-[max(6px,0.32vw)]">Create your Buyer account</h1>
        <p className="text-body-medium text-[#676F7E] mb-[max(40px,2.1vw)]">Enter your basic account information.</p>
        <StepIndicator currentStep={2} totalSteps={BUYER_TOTAL_STEPS} />
      </div>

      <div className="bg-white p-[max(40px,2.1vw)] rounded-[max(10px,0.52vw)]">
        <CreateAccountStep form={form} />

        <div className="flex gap-3 mt-8">
          <Button type="button" variant="secondary" onClick={onBack} className="flex-1">
            Back
          </Button>
          <Button type="button" onClick={onContinue} className="flex-1 flex justify-center items-center gap-[10px]">
            Continue <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
