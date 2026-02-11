'use client';

import type { UseFormReturn } from 'react-hook-form';
import type { SignupFormValues } from '@/lib/validations/signup';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';
import { Google } from '@/components/icons/Google';

/**
 * Shared "Create your account" step (from signup image 2).
 * Used inside both Buyer and Breeder signup flows.
 */
export default function CreateAccountStep({ form }: { form: UseFormReturn<SignupFormValues> }) {
  const {
    register,
    formState: { errors }
  } = form;

  return (
    <div className="space-y-5">
      <Button
        type="button"
        variant="secondary"
        className="w-full! flex items-center justify-center gap-[max(10px,0.52vw)]"
      >
        <Google />
        Continue with Google
      </Button>

      <div className="relative">
        <div className="relative flex justify-center text-body-small text-foreground/70">
          <span className=" text-[max(15px,0.78vw)] text-foreground ">Or sign up with your email</span>
        </div>
      </div>

      <div>
        <label htmlFor="fullName" className="block text-body-small font-medium text-foreground mb-1.5">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          {...register('fullName')}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-surface text-foreground placeholder:text-foreground/40',
            errors.fullName ? 'border-red-500' : 'border-border'
          )}
          placeholder="Your full name"
        />
        {errors.fullName && <p className="mt-1 text-body-extra-small text-red-600">{errors.fullName.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-body-small font-medium text-foreground mb-1.5">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-surface text-foreground placeholder:text-foreground/40',
            errors.email ? 'border-red-500' : 'border-border'
          )}
          placeholder="you@example.com"
        />
        {errors.email && <p className="mt-1 text-body-extra-small text-red-600">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="password" className="block text-body-small font-medium text-foreground mb-1.5">
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register('password')}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-surface text-foreground placeholder:text-foreground/40',
            errors.password ? 'border-red-500' : 'border-border'
          )}
          placeholder="••••••••"
        />
        <p className="mt-1 text-body-extra-small text-foreground/50">Must be at least 8 characters</p>
        {errors.password && <p className="mt-0.5 text-body-extra-small text-red-600">{errors.password.message}</p>}
      </div>
    </div>
  );
}
