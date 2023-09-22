import * as React from "react";
const SVGComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={14}
        viewBox="0 0 15 14"
        fill="none"
        {...props}
    >
        <mask id="path-1-inside-1_129_8645" fill="white">
            <rect x={8.4375} width={6.5625} height={6.53333} rx={1} />
        </mask>
        <rect
            x={8.4375}
            width={6.5625}
            height={6.53333}
            rx={1}
            stroke="white"
            strokeWidth={3}
            mask="url(#path-1-inside-1_129_8645)"
        />
        <mask id="path-2-inside-2_129_8645" fill="white">
            <rect x={8.4375} y={7.46667} width={6.5625} height={6.53333} rx={1} />
        </mask>
        <rect
            x={8.4375}
            y={7.46667}
            width={6.5625}
            height={6.53333}
            rx={1}
            stroke="white"
            strokeWidth={3}
            mask="url(#path-2-inside-2_129_8645)"
        />
        <mask id="path-3-inside-3_129_8645" fill="white">
            <rect y={7.46667} width={6.5625} height={6.53333} rx={1} />
        </mask>
        <rect
            y={7.46667}
            width={6.5625}
            height={6.53333}
            rx={1}
            stroke="white"
            strokeWidth={3}
            mask="url(#path-3-inside-3_129_8645)"
        />
        <mask id="path-4-inside-4_129_8645" fill="white">
            <rect x={0.0000305176} width={6.5625} height={6.53333} rx={1} />
        </mask>
        <rect
            x={0.0000305176}
            width={6.5625}
            height={6.53333}
            rx={1}
            stroke="white"
            strokeWidth={3}
            mask="url(#path-4-inside-4_129_8645)"
        />
    </svg>
);
export default SVGComponent;
