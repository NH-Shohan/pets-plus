'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import type { SignupFormValues } from '@/lib/validations/signup';
import { defaultSignupValues, step1Schema, step2Schema, step3Schema } from '@/lib/validations/signup';
import StepIndicator from './StepIndicator';
import ValidationToast from './ValidationToast';
import SignupStep1 from './SignupStep1';
import BuyerSignupForm from './BuyerSignupForm';
import BreederSignupForm from './BreederSignupForm';
import SignupStep4 from './SignupStep4';
import Button from '@/components/ui/Button';
import { ArrowRight } from '../icons/ArrowRight';

export default function SignupForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showValidationToast, setShowValidationToast] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<SignupFormValues>({
    defaultValues: defaultSignupValues as SignupFormValues,
    mode: 'onTouched'
  });

  const role = form.watch('role');
  const isBreeder = role === 'breeder';

  const validateStep = (step: number): boolean => {
    setShowValidationToast(false);
    const values = form.getValues();

    if (step === 1) {
      const result = step1Schema.safeParse({ role: values.role });
      if (!result.success) {
        form.setError('role', { message: result.error.errors[0]?.message });
        setShowValidationToast(true);
        return false;
      }
      return true;
    }

    if (step === 2) {
      const result = step2Schema.safeParse({
        fullName: values.fullName,
        email: values.email,
        password: values.password
      });
      if (!result.success) {
        const err = result.error.errors[0];
        const field = (err.path[0] as keyof SignupFormValues) ?? 'root';
        form.setError(field, { message: err.message });
        setShowValidationToast(true);
        return false;
      }
      return true;
    }

    if (step === 3 && isBreeder) {
      const result = step3Schema.safeParse({
        businessName: values.businessName,
        phone: values.phone,
        streetAddress: values.streetAddress,
        city: values.city,
        state: values.state,
        zipCode: values.zipCode,
        country: values.country,
        breedCategory: values.breedCategory,
        specificBreeds: values.specificBreeds,
        yearsExperience: values.yearsExperience,
        about: values.about,
        website: values.website
      });
      if (!result.success) {
        const err = result.error.errors[0];
        const field = (err.path[0] as keyof SignupFormValues) ?? 'root';
        form.setError(field, { message: err.message });
        setShowValidationToast(true);
        return false;
      }
      return true;
    }

    return true;
  };

  const handleContinue = () => {
    if (currentStep === 1 && validateStep(1)) {
      setCurrentStep(2);
      return;
    }
    if (currentStep === 2 && validateStep(2)) {
      if (isBreeder) setCurrentStep(3);
      else {
        setSubmitted(true);
        setCurrentStep(4);
      }
      return;
    }
    if (currentStep === 3 && isBreeder && validateStep(3)) {
      setSubmitted(true);
      setCurrentStep(4);
      return;
    }
  };

  const handleBack = () => {
    setShowValidationToast(false);
    if (currentStep === 2) setCurrentStep(1);
    else if (currentStep === 3) setCurrentStep(2);
  };

  if (submitted && currentStep === 4) {
    return <SignupStep4 />;
  }

  return (
    <div
      className={`w-full  mx-auto ${currentStep === 1 ? 'max-w-[max(872px,45.46vw)]' : 'max-w-[max(736px,38.33vw)]'}`}
    >
      <div className="">
        {currentStep === 1 && (
          <div className="text-center">
            <h1 className="section-title--medium text-foreground mb-[max(6px,0.32vw)]">Join our marketplace</h1>
            <p className="text-body-medium text-[#676F7E] mb-[max(40px,2.1vw)]">Sign up as a Buyer or Breeder</p>
            <StepIndicator currentStep={1} />
            <SignupStep1 form={form} />
          </div>
        )}

        {currentStep === 2 && !isBreeder && (
          <BuyerSignupForm form={form} currentStep={currentStep} onBack={handleBack} onContinue={handleContinue} />
        )}

        {currentStep === 2 && isBreeder && (
          <BreederSignupForm form={form} currentStep={currentStep} onBack={handleBack} onContinue={handleContinue} />
        )}

        {currentStep === 3 && isBreeder && (
          <BreederSignupForm form={form} currentStep={currentStep} onBack={handleBack} onContinue={handleContinue} />
        )}

        {currentStep === 1 && (
          <div className="flex gap-3 mt-[max(45px,2.34vw)] justify-center">
            <Button
              type="button"
              onClick={handleContinue}
              className="w-full flex justify-center items-center gap-[10px]"
            >
              Continue <ArrowRight />
            </Button>
          </div>
        )}
      </div>

      <p className="text-center text-body-small text-foreground/70 mt-6">
        Already have an account?{' '}
        <a href="/sign-in" className="text-primary hover:underline font-medium">
          Sign in
        </a>
      </p>

      {showValidationToast && <ValidationToast message="Please fill in all fields" />}
    </div>
  );
}
