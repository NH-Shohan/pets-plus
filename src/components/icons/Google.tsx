import { SVGProps } from 'react';

const size = 'max(17px, 0.885vw)'; // 17/1920*100

export function Google({
  width = size,
  height = size,
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
      {...props}
    >
      <mask
        id="google-mask"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="17"
        height="17"
      >
        <path
          d="M16.8368 6.92305H8.68107V10.191H13.3674C13.292 10.6535 13.1229 11.1085 12.8752 11.5234C12.5913 11.9987 12.2405 12.3605 11.8808 12.6361C10.8036 13.4616 9.54762 13.6304 8.67538 13.6304C6.47197 13.6304 4.58931 12.2063 3.8605 10.2712C3.83109 10.201 3.81155 10.1285 3.78777 10.0568C3.62672 9.56428 3.53872 9.04268 3.53872 8.50054C3.53872 7.93632 3.63401 7.39623 3.80776 6.88614C4.49309 4.87433 6.4182 3.37171 8.67696 3.37171C9.13128 3.37171 9.56879 3.42579 9.98369 3.53365C10.9319 3.78016 11.6026 4.26567 12.0136 4.6497L14.4934 2.22116C12.9849 0.838077 11.0185 2.09113e-09 8.67284 2.09113e-09C6.79763 -4.03603e-05 5.06635 0.58422 3.64763 1.57164C2.49709 2.37241 1.55349 3.44454 0.916672 4.6897C0.324339 5.84422 0 7.12364 0 8.49926C0 9.87495 0.324835 11.1677 0.91717 12.3115V12.3192C1.54282 13.5336 2.45774 14.5791 3.56972 15.3762C4.54116 16.0726 6.28303 17 8.67284 17C10.0471 17 11.2652 16.7522 12.3394 16.2879C13.1143 15.9529 13.8008 15.516 14.4224 14.9545C15.2438 14.2125 15.887 13.2948 16.3261 12.2389C16.7651 11.1831 17 9.98906 17 8.69456C17 8.09169 16.9394 7.47944 16.8368 6.92299V6.92305Z"
          fill="white"
        />
      </mask>
      <g mask="url(#google-mask)">
        <g filter="url(#google-filter0)">
          <path
            d="M-0.125122 8.55701C-0.116107 9.91098 0.269703 11.3079 0.853691 12.4357V12.4434C1.27565 13.2624 1.85235 13.9093 2.50919 14.5503L6.47639 13.1028C5.72582 12.7215 5.61129 12.4879 5.07325 12.0616C4.52343 11.5072 4.11364 10.8707 3.85844 10.1244H3.84816L3.85844 10.1166C3.69055 9.62381 3.67399 9.10068 3.66779 8.55701H-0.125122Z"
            fill="url(#google-paint0)"
          />
        </g>
        <g filter="url(#google-filter1)">
          <path
            d="M8.68067 -0.0620117C8.28856 1.31555 8.43849 2.65458 8.68067 3.4337C9.13348 3.43403 9.56968 3.48801 9.98328 3.59554C10.9315 3.84205 11.6021 4.32756 12.0131 4.71159L14.5564 2.22101C13.0497 0.839577 11.2366 -0.0598352 8.68067 -0.0620117Z"
            fill="url(#google-paint1)"
          />
        </g>
        <g filter="url(#google-filter2)">
          <path
            d="M8.67234 -0.0727539C6.749 -0.0727955 4.97328 0.526465 3.51814 1.53924C2.97785 1.91528 2.48203 2.34967 2.04054 2.83272C1.92488 3.91779 2.90635 5.25145 4.84996 5.24041C5.79299 4.14345 7.18771 3.43372 8.74004 3.43372C8.74145 3.43372 8.74283 3.43384 8.74425 3.43385L8.68085 -0.0725057C8.67799 -0.0725075 8.67521 -0.0727539 8.67234 -0.0727539Z"
            fill="url(#google-paint2)"
          />
        </g>
        <g filter="url(#google-filter3)">
          <path
            d="M15.0208 8.94962L13.304 10.129C13.2287 10.5915 13.0594 11.0465 12.8117 11.4613C12.5279 11.9366 12.1771 12.2985 11.8174 12.5741C10.7424 13.3979 9.48976 13.5675 8.61775 13.5682C7.71643 15.1033 7.55841 15.8722 8.68114 17.1112C10.0704 17.1101 11.302 16.8594 12.3884 16.3897C13.1737 16.0503 13.8695 15.6075 14.4994 15.0384C15.3318 14.2865 15.9838 13.3565 16.4287 12.2864C16.8736 11.2164 17.1116 10.0064 17.1116 8.69458L15.0208 8.94962Z"
            fill="url(#google-paint3)"
          />
        </g>
        <g filter="url(#google-filter4)">
          <path
            d="M8.55481 6.79883V10.3151H16.8144C16.887 9.83357 17.1273 9.2104 17.1273 8.69452C17.1273 8.09165 17.0668 7.35528 16.9641 6.79883H8.55481Z"
            fill="#3086FF"
          />
        </g>
        <g filter="url(#google-filter5)">
          <path
            d="M2.08021 2.70862C1.57051 3.2663 1.13507 3.8905 0.789817 4.56557C0.197494 5.72009 -0.126831 7.12366 -0.126831 8.49928C-0.126831 8.51867 -0.125227 8.53763 -0.125097 8.55699C0.137224 9.05995 3.4984 8.96364 3.66782 8.55699C3.6676 8.53801 3.66547 8.51951 3.66547 8.50049C3.66547 7.93628 3.76079 7.52041 3.93453 7.01031C4.14887 6.38112 4.48448 5.80172 4.91363 5.30251C5.01091 5.17831 5.2704 4.91131 5.34611 4.75116C5.37495 4.69016 5.29375 4.65591 5.28921 4.63444C5.28413 4.61043 5.17527 4.62974 5.15088 4.61185C5.07344 4.55505 4.9201 4.52539 4.82699 4.49903C4.62796 4.44267 4.29813 4.3184 4.11492 4.18958C3.53583 3.78237 2.6321 3.29596 2.08021 2.70862Z"
            fill="url(#google-paint4)"
          />
        </g>
        <g filter="url(#google-filter6)">
          <path
            d="M4.12736 4.63686C5.47022 5.4503 5.85641 4.22627 6.74922 3.84324L5.19614 0.622559C4.62483 0.862679 4.08506 1.16101 3.58423 1.50958C2.83629 2.03014 2.1758 2.66538 1.63019 3.38829L4.12736 4.63686Z"
            fill="url(#google-paint5)"
          />
        </g>
        <g filter="url(#google-filter7)">
          <path
            d="M4.67391 12.854C2.8713 13.5047 2.58909 13.5281 2.42316 14.6452C2.74024 14.9546 3.08093 15.2409 3.44296 15.5004C4.4144 16.1967 6.28302 17.1242 8.67283 17.1242C8.67563 17.1242 8.67831 17.1239 8.68112 17.1239V13.5061C8.67931 13.5061 8.67723 13.5063 8.67542 13.5063C7.78052 13.5063 7.06541 13.2712 6.3322 12.8625C6.15142 12.7617 5.82344 13.0323 5.65671 12.9113C5.42676 12.7445 4.87336 13.0551 4.67391 12.854Z"
            fill="url(#google-paint6)"
          />
        </g>
        <g opacity="0.5" filter="url(#google-filter8)">
          <path
            d="M7.62512 13.3921V17.0611C7.9595 17.1003 8.30748 17.1241 8.67253 17.1241C9.03848 17.1241 9.39251 17.1053 9.73653 17.0707V13.4168C9.35101 13.4827 8.98791 13.5062 8.67513 13.5062C8.3149 13.5062 7.96457 13.4642 7.62512 13.3921Z"
            fill="#0FBC5C"
          />
        </g>
      </g>
      <defs>
        <filter
          id="google-filter0"
          x="-0.595201"
          y="8.08693"
          width="7.54166"
          height="6.93344"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_1_801" />
        </filter>
        <filter
          id="google-filter1"
          x="7.9695"
          y="-0.532091"
          width="7.05698"
          height="5.71372"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_1_801" />
        </filter>
        <filter
          id="google-filter2"
          x="1.56129"
          y="-0.542833"
          width="7.65305"
          height="6.25339"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_1_801" />
        </filter>
        <filter
          id="google-filter3"
          x="7.41994"
          y="8.2245"
          width="10.1617"
          height="9.35678"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_1_801" />
        </filter>
        <filter
          id="google-filter4"
          x="8.08473"
          y="6.32875"
          width="9.51261"
          height="4.45652"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_1_801" />
        </filter>
        <filter
          id="google-filter5"
          x="-0.59691"
          y="2.23854"
          width="6.41928"
          height="7.13059"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_1_801" />
        </filter>
        <filter
          id="google-filter6"
          x="-1.67466"
          y="-2.68229"
          width="11.7287"
          height="10.8974"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="1.65243" result="effect1_foregroundBlur_1_801" />
        </filter>
        <filter
          id="google-filter7"
          x="1.95308"
          y="12.3694"
          width="7.19809"
          height="5.22483"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_1_801" />
        </filter>
        <filter
          id="google-filter8"
          x="7.15504"
          y="12.922"
          width="3.05155"
          height="4.67209"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="0.23504" result="effect1_foregroundBlur_1_801" />
        </filter>
        <radialGradient
          id="google-paint0"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-0.353261 -8.46594 12.7012 -0.508033 6.39697 14.4228)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.141612" stopColor="#1ABD4D" />
          <stop offset="0.247515" stopColor="#6EC30D" />
          <stop offset="0.311547" stopColor="#8AC502" />
          <stop offset="0.366013" stopColor="#A2C600" />
          <stop offset="0.445673" stopColor="#C8C903" />
          <stop offset="0.540305" stopColor="#EBCB03" />
          <stop offset="0.615636" stopColor="#F7CD07" />
          <stop offset="0.699345" stopColor="#FDCD04" />
          <stop offset="0.771242" stopColor="#FDCE05" />
          <stop offset="0.860566" stopColor="#FFCE0A" />
        </radialGradient>
        <radialGradient
          id="google-paint1"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(5.99935 -1.44186e-05 -8.43232e-06 7.58573 14.3185 4.53139)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.408458" stopColor="#FB4E5A" />
          <stop offset="1" stopColor="#FF4540" />
        </radialGradient>
        <radialGradient
          id="google-paint2"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-8.40552 4.55807 6.31745 11.1676 11.0424 -1.17081)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.231273" stopColor="#FF4541" />
          <stop offset="0.311547" stopColor="#FF4540" />
          <stop offset="0.457516" stopColor="#FF4640" />
          <stop offset="0.540305" stopColor="#FF473F" />
          <stop offset="0.699346" stopColor="#FF5138" />
          <stop offset="0.771242" stopColor="#FF5B33" />
          <stop offset="0.860566" stopColor="#FF6C29" />
          <stop offset="1" stopColor="#FF8C18" />
        </radialGradient>
        <radialGradient
          id="google-paint3"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-15.2436 -19.4825 -7.34517 5.50908 8.8061 16.0109)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.131546" stopColor="#0CBA65" />
          <stop offset="0.209784" stopColor="#0BB86D" />
          <stop offset="0.297297" stopColor="#09B479" />
          <stop offset="0.396257" stopColor="#08AD93" />
          <stop offset="0.477124" stopColor="#0AA6A9" />
          <stop offset="0.568425" stopColor="#0D9CC6" />
          <stop offset="0.667385" stopColor="#1893DD" />
          <stop offset="0.768727" stopColor="#258BF1" />
          <stop offset="0.858506" stopColor="#3086FF" />
        </radialGradient>
        <radialGradient
          id="google-paint4"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-1.07876 9.10362 12.8563 1.46036 7.93619 1.53288)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.366013" stopColor="#FF4E3A" />
          <stop offset="0.457516" stopColor="#FF8A1B" />
          <stop offset="0.540305" stopColor="#FFA312" />
          <stop offset="0.615636" stopColor="#FFB60C" />
          <stop offset="0.771242" stopColor="#FFCD0A" />
          <stop offset="0.860566" stopColor="#FECF0A" />
          <stop offset="0.915033" stopColor="#FECF08" />
          <stop offset="1" stopColor="#FDCD01" />
        </radialGradient>
        <radialGradient
          id="google-paint5"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-3.11817 3.37647 -9.72698 -8.61092 6.41918 1.43846)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.315904" stopColor="#FF4C3C" />
          <stop offset="0.603818" stopColor="#FF692C" />
          <stop offset="0.726837" stopColor="#FF7825" />
          <stop offset="0.884534" stopColor="#FF8D1B" />
          <stop offset="1" stopColor="#FF9F13" />
        </radialGradient>
        <radialGradient
          id="google-paint6"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(-8.40552 -4.55807 6.31745 -11.1676 11.0426 18.1706)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.231273" stopColor="#0FBC5F" />
          <stop offset="0.311547" stopColor="#0FBC5F" />
          <stop offset="0.366013" stopColor="#0FBC5E" />
          <stop offset="0.457516" stopColor="#0FBC5D" />
          <stop offset="0.540305" stopColor="#12BC58" />
          <stop offset="0.699346" stopColor="#28BF3C" />
          <stop offset="0.771242" stopColor="#38C02B" />
          <stop offset="0.860566" stopColor="#52C218" />
          <stop offset="0.915033" stopColor="#67C30F" />
          <stop offset="1" stopColor="#86C504" />
        </radialGradient>
      </defs>
    </svg>
  );
}
