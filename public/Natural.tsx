import React from "react";
import type { SVGProps } from "react";

export default function Natural(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        color="currentColor"
      >
        <path d="M5.059 11.742c1.918.236 3.672-1.189 3.917-3.182S6.94 4.646 7.768 2c-4.103.594-5.517 3.901-5.74 5.706c-.245 1.993 1.112 3.8 3.03 4.036"></path>
        <path d="M7 20c-1.925-4.676-2.23-8.806-1.867-12m4.375 9.668c1.175 2.392 4.013 3.052 6.338 1.474S18.538 13.19 22 11.665c-3.695-4.093-8.303-2.615-10.408-1.186c-2.326 1.578-3.259 4.797-2.084 7.19"></path>
        <path d="M6 22c2.378-4.096 5.264-6.57 8-8"></path>
      </g>
    </svg>
  );
}
