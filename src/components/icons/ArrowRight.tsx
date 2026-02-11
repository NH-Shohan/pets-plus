import { SVGProps } from 'react';

const widthSize = 'max(11px, 0.57vw)'; // 11/1920*100
const heightSize = 'max(9px, 0.47vw)';  // 9/1920*100

export function ArrowRight({
  width = widthSize,
  height = heightSize,
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M0.75 5.25H11.75"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.25 0.75L11.75 5.25L7.25 9.75"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
