'use client';

import { cn } from '@/lib/utils';
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'default' | 'icon';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'default', className = '', style, ...props }, ref) => {
    const baseStyles =
      'font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 text-body-medium font-bold! w-full sm:w-auto';

    const variantStyles = {
      primary: 'bg-primary text-white hover:bg-primary-light',
      secondary: 'bg-surface text-foreground border border-[#E2E4E9] hover:bg-mint-light rounded-[max(10px,0.52vw)]',
      ghost: 'bg-transparent text-foreground hover:bg-mint-light'
    };

    const sizeClasses = {
      default: '',
      small: '',
      icon: ''
    };

    // Responsive sizing using vw units with max() for minimum sizes
    const sizeInlineStyles: Record<'default' | 'icon', React.CSSProperties> = {
      default: {
        padding: 'max(12px,0.625vw) max(20px,1.0416666667vw)',
        borderRadius: 'max(10px,0.5208333333vw)'
      },
      icon: {
        padding: 'max(6px, 0.417vw)',
        borderRadius: 'max(6px, 0.417vw)'
      }
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeClasses[size], className)}
        style={{ ...sizeInlineStyles[size], ...style }}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
