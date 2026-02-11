import { z } from 'zod';

export const step1Schema = z.object({
  role: z.enum(['buyer', 'breeder'], { message: "Please choose how you'd like to use the platform" })
});

export const step2Schema = z.object({
  fullName: z.string().min(1, 'Full name is required'),
  email: z.string().min(1, 'Email is required').email('Please enter a valid email'),
  password: z.string().min(8, 'Must be at least 8 characters')
});

export const breedCategoryEnum = z.enum(['pets', 'farm', 'exotic']);

export const step3Schema = z.object({
  businessName: z.string().optional(),
  phone: z.string().min(1, 'Phone is required'),
  streetAddress: z.string().min(1, 'Street address is required'),
  city: z.string().min(1, 'City is required'),
  state: z.string().min(1, 'State is required'),
  zipCode: z.string().min(1, 'Zip code is required'),
  country: z.string().min(1, 'Country is required'),
  breedCategory: breedCategoryEnum,
  specificBreeds: z
    .string()
    .optional()
    .refine(val => !val || val.length >= 8, 'Must be at least 8 characters'),
  yearsExperience: z.string().min(1, 'Years of experience is required'),
  about: z.string().optional(),
  website: z.union([z.string().url('Please enter a valid URL'), z.literal('')]).optional()
});

export type Step1Values = z.infer<typeof step1Schema>;
export type Step2Values = z.infer<typeof step2Schema>;
export type Step3Values = z.infer<typeof step3Schema>;

export type SignupFormValues = Step1Values &
  Step2Values & {
    profilePhoto?: FileList | null;
  } & Step3Values;

export const defaultSignupValues: Partial<SignupFormValues> = {
  role: undefined,
  fullName: '',
  email: '',
  password: '',
  businessName: '',
  phone: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
  country: 'United States',
  breedCategory: undefined,
  specificBreeds: '',
  yearsExperience: '',
  about: '',
  website: ''
};
