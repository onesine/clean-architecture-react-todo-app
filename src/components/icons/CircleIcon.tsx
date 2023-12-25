import { SVGAttributes } from "react";

const CircleIcon = (props: SVGAttributes<SVGElement>) => {
    return (
        <svg
            {...props}
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 32 32"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M 16 4 C 9.382813 4 4 9.382813 4 16 C 4 22.617188 9.382813 28 16 28 C 22.617188 28 28 22.617188 28 16 C 28 9.382813 22.617188 4 16 4 Z M 16 6 C 21.535156 6 26 10.464844 26 16 C 26 21.535156 21.535156 26 16 26 C 10.464844 26 6 21.535156 6 16 C 6 10.464844 10.464844 6 16 6 Z"></path>
        </svg>
    );
};

export default CircleIcon;
