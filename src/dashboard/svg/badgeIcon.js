import React from "react";


function Icon(fill) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      fill="none"
      viewBox="0 0 66 65"
    >
      <g>
        <g filter="url(#filter0_d_526_304)">
          <ellipse
            cx="32.802"
            cy="30.5"
            fill={fill}
            rx="29.802"
            ry="29.5"
          ></ellipse>
        </g>
        <g>
          <g>
            <path
              fill="#DEDEE0"
              d="M47.632 43.843l12.12-40.52-20.036 32.682 7.916 7.838z"
            ></path>
            <path
              fill="#fff"
              d="M59.753 3.324L18.796 15.29l7.951 7.838L59.753 3.325z"
            ></path>
            <path
              fill="#EDEDEF"
              d="M39.716 36.005L59.753 3.324 26.747 23.128l12.97 12.877z"
            ></path>
            <g>
              <path
                fill="#DEDEE0"
                d="M6.71 55.81l40.922-11.967-7.916-7.838L6.71 55.81z"
              ></path>
              <path
                fill="#F9F9F9"
                d="M26.747 23.128l-7.95-7.838L6.71 55.81l20.037-32.682z"
              ></path>
              <path
                fill="#EDEDEF"
                d="M26.747 23.128L6.71 55.81l33.006-19.805-12.969-12.877z"
              ></path>
            </g>
            <path
              fill="#414042"
              d="M39.716 36.005L26.747 23.128l-7.95-7.838L6.71 55.81l40.922-11.967-7.916-7.838z"
              opacity="0.1"
            ></path>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_526_304"
          width="65.603"
          height="65"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="1.5"></feGaussianBlur>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_526_304"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_526_304"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default Icon;