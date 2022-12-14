import { h } from 'preact';

export default function DesktopIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      fill="none"
      aria-hidden="true"
      class={`mb-6  `}
    >
      <path
        d="M5 13a8 8 0 0 1 8-8h22a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H13a8 8 0 0 1-8-8V13Z"
        fill="currentColor"
        fill-opacity="0"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M15.5 25h9M13 31l5.145-12.748c.674-1.67 3.036-1.67 3.71 0L27 31"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M31 13s2 0 2 1.833v18.334C33 35 31 35 31 35M35 13s-2 0-2 1.833v18.334C33 35 35 35 35 35M31 24h4"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
