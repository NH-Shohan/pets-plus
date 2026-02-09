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
      style,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "font-semibold transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

    const variantStyles = {
      primary: "bg-primary text-white hover:bg-primary-light",
      secondary:
        "bg-surface text-foreground border border-border hover:bg-mint-light",
      ghost: "bg-transparent text-foreground hover:bg-mint-light",
    };

    const sizeClasses = {
      default: "",
      small: "",
      icon: "",
    };

    // Responsive sizing using vw units with max() for minimum sizes
    const sizeInlineStyles: Record<
      "default" | "small" | "icon",
      React.CSSProperties
    > = {
      default: {
        padding: "max(10px, 0.625vw) max(16px, 1.042vw)",
        borderRadius: "max(8px, 0.521vw)",
        fontSize: "max(14px, 0.875vw)",
      },
      small: {
        padding: "max(6px, 0.417vw) max(12px, 0.833vw)",
        borderRadius: "max(6px, 0.417vw)",
        fontSize: "max(12px, 0.729vw)",
      },
      icon: {
        padding: "max(6px, 0.417vw)",
        borderRadius: "max(6px, 0.417vw)",
      },
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${sizeClasses[size]} ${className}`}
        style={{ ...sizeInlineStyles[size], ...style }}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
