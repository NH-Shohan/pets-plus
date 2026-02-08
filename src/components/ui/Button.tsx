"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "small" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "default",
      className = "",
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

    const variantStyles = {
      primary:
        "bg-primary text-white hover:bg-primary-dark active:scale-[0.98]",
      secondary:
        "bg-surface text-foreground border border-border hover:bg-surface-light active:scale-[0.98]",
      ghost:
        "bg-transparent text-foreground hover:bg-surface-light active:scale-[0.98]",
    };

    const sizeStyles = {
      // Padding: 12px top/bottom, 20px left/right | Radius: 10px
      default: "py-3 px-5 rounded-[10px] text-lg",
      small: "py-2 px-4 rounded-lg text-sm",
      icon: "p-2 rounded-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
