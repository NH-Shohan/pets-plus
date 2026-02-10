import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

const customTwMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-hero-primary',
        'text-hero-secondary',
        'text-body-large',
        'text-body-large-vietnam',
        'text-body-medium',
        'text-body-medium-vietnam',
        'text-body-base',
        'text-body-small',
        'text-body-small-vietnam',
        'text-body-extra-small'
      ]
    }
  }
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
