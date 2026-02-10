import { SVGProps } from 'react';

export function ChevronDown({
  width = 11,
  height = 6,
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M9.65833 0.5L5.07916 5.07916L0.5 0.5" />
    </svg>
  );
}
