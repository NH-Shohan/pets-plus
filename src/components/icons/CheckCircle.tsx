import { SVGProps } from 'react';

const size = 'max(40px, 2.08vw)';

export function CheckCircle({
  width = size,
  height = size,
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <rect
        width="40"
        height="40"
        rx="20"
        fill="currentColor"
      />
      <path
        d="M12.8125 20.625L17.1875 25L27.1875 15"
        stroke="white"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
