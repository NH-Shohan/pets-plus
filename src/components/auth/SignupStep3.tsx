'use client';

import type { UseFormReturn } from 'react-hook-form';
import type { SignupFormValues } from '@/lib/validations/signup';
import { Camera, PawPrint, Tractor, Turtle } from 'lucide-react';
import { cn } from '@/lib/utils';

const breedCategories = [
  {
    value: 'pets' as const,
    label: 'Pets',
    description: 'Dogs, cats, birds, small animals',
    icon: PawPrint
  },
  {
    value: 'farm' as const,
    label: 'Farm',
    description: 'Livestock, poultry, working animals',
    icon: Tractor
  },
  {
    value: 'exotic' as const,
    label: 'Exotic',
    description: 'Reptiles, rare species, specialty',
    icon: Turtle
  }
];

export default function SignupStep3({ form }: { form: UseFormReturn<SignupFormValues> }) {
  const { register, watch, setValue, formState: { errors } } = form;

  return (
    <div className="space-y-5">
      <div>
        <p className="text-body-small text-foreground/70 mb-2">Profile Photo (optional)</p>
        <label className="flex flex-col items-center justify-center w-full h-28 rounded-xl border-2 border-dashed border-border bg-mint-faint cursor-pointer hover:bg-mint-subtle transition-colors">
          <Camera className="h-8 w-8 text-foreground/40 mb-1" />
          <span className="text-body-small text-foreground/70">Upload a professional photo</span>
          <span className="text-body-extra-small text-foreground/50">JPG, PNG, WebP · Max 5MB</span>
          <input type="file" className="hidden" accept="image/jpeg,image/png,image/webp" {...register('profilePhoto')} />
        </label>
      </div>

      <div>
        <label htmlFor="businessName" className="block text-body-small font-medium text-foreground mb-1.5">
          Business Name (optional)
        </label>
        <input
          id="businessName"
          type="text"
          {...register('businessName')}
          className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-foreground/40"
          placeholder="Your kennel or business name"
        />
        <p className="mt-1 text-body-extra-small text-foreground/50">
          Required for verification and breeder communication.
        </p>
      </div>

      <div>
        <label htmlFor="phone" className="block text-body-small font-medium text-foreground mb-1.5">
          Phone <span className="text-red-500">*</span>
        </label>
        <input
          id="phone"
          type="tel"
          {...register('phone')}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-surface text-foreground placeholder:text-foreground/40',
            errors.phone ? 'border-red-500' : 'border-border'
          )}
          placeholder="+1 (555) 000-0000"
        />
        <p className="mt-1 text-body-extra-small text-foreground/50">
          Required for verification and breeder communication.
        </p>
        {errors.phone && (
          <p className="mt-0.5 text-body-extra-small text-red-600">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <label className="block text-body-small font-medium text-foreground mb-1.5">
          Address <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          <input
            {...register('streetAddress')}
            placeholder="Street Address"
            className={cn(
              'w-full px-4 py-3 rounded-xl border bg-surface text-foreground placeholder:text-foreground/40',
              errors.streetAddress ? 'border-red-500' : 'border-border'
            )}
          />
          <div className="grid grid-cols-2 gap-3">
            <input
              {...register('city')}
              placeholder="City"
              className={cn(
                'w-full px-4 py-3 rounded-xl border bg-surface text-foreground placeholder:text-foreground/40',
                errors.city ? 'border-red-500' : 'border-border'
              )}
            />
            <input
              {...register('state')}
              placeholder="State"
              className={cn(
                'w-full px-4 py-3 rounded-xl border bg-surface text-foreground placeholder:text-foreground/40',
                errors.state ? 'border-red-500' : 'border-border'
              )}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <input
              {...register('zipCode')}
              placeholder="Zip Code"
              className={cn(
                'w-full px-4 py-3 rounded-xl border bg-surface text-foreground placeholder:text-foreground/40',
                errors.zipCode ? 'border-red-500' : 'border-border'
              )}
            />
            <input
              {...register('country')}
              placeholder="Country"
              className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-foreground/40"
            />
          </div>
        </div>
        {(errors.streetAddress || errors.city || errors.state || errors.zipCode) && (
          <p className="mt-1 text-body-extra-small text-red-600">Please fill in all address fields.</p>
        )}
      </div>

      <div>
        <p className="block text-body-small font-medium text-foreground mb-2">
          What do you breed? <span className="text-red-500">*</span>
        </p>
        <div className="grid grid-cols-3 gap-3">
          {breedCategories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = watch('breedCategory') === cat.value;
            return (
              <button
                key={cat.value}
                type="button"
                onClick={() => setValue('breedCategory', cat.value, { shouldValidate: true })}
                className={cn(
                  'p-4 rounded-xl border-2 text-center transition-all',
                  isSelected ? 'border-primary bg-mint-subtle' : 'border-border bg-surface hover:border-foreground/20'
                )}
              >
                <Icon className={cn('h-6 w-6 mx-auto mb-1', isSelected ? 'text-primary' : 'text-foreground/60')} />
                <span className="font-medium text-body-small text-foreground block">{cat.label}</span>
                <span className="text-body-extra-small text-foreground/70 block mt-0.5">{cat.description}</span>
              </button>
            );
          })}
        </div>
        <input type="hidden" {...register('breedCategory')} />
        {errors.breedCategory && (
          <p className="mt-1 text-body-extra-small text-red-600">{errors.breedCategory.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="specificBreeds" className="block text-body-small font-medium text-foreground mb-1.5">
          Specific Breeds (optional)
        </label>
        <input
          id="specificBreeds"
          type="text"
          {...register('specificBreeds')}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-surface text-foreground placeholder:text-foreground/40',
            errors.specificBreeds ? 'border-red-500' : 'border-border'
          )}
          placeholder="e.g., Golden Retriever, Labrador, German Shepherd"
        />
        <p className="mt-1 text-body-extra-small text-foreground/50">Must be at least 8 characters</p>
        {errors.specificBreeds && (
          <p className="mt-0.5 text-body-extra-small text-red-600">{errors.specificBreeds.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="yearsExperience" className="block text-body-small font-medium text-foreground mb-1.5">
          Years of breeding experience <span className="text-red-500">*</span>
        </label>
        <input
          id="yearsExperience"
          type="text"
          {...register('yearsExperience')}
          className={cn(
            'w-full px-4 py-3 rounded-xl border bg-surface text-foreground placeholder:text-foreground/40',
            errors.yearsExperience ? 'border-red-500' : 'border-border'
          )}
          placeholder="e.g., 5"
        />
        {errors.yearsExperience && (
          <p className="mt-1 text-body-extra-small text-red-600">{errors.yearsExperience.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="about" className="block text-body-small font-medium text-foreground mb-1.5">
          About your breeding program (optional)
        </label>
        <textarea
          id="about"
          rows={3}
          {...register('about')}
          className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-foreground/40 resize-none"
          placeholder="Tell potential buyers about your program"
        />
      </div>

      <div>
        <label htmlFor="website" className="block text-body-small font-medium text-foreground mb-1.5">
          Website (optional)
        </label>
        <input
          id="website"
          type="url"
          {...register('website')}
          className="w-full px-4 py-3 rounded-xl border border-border bg-surface text-foreground placeholder:text-foreground/40"
          placeholder="https://yoursite.com"
        />
      </div>

      <p className="text-body-extra-small text-foreground/70">
        By signing up, you agree to our{' '}
        <a href="/terms" className="text-primary hover:underline">Terms of Service</a>
        {' '}and{' '}
        <a href="/breeder-guidelines" className="text-primary hover:underline">Breeder Guidelines</a>.
      </p>
    </div>
  );
}
