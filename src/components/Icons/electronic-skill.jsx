import { h } from 'preact';

export default function ElectronicIcon({ active = false }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="48"
      height="48"
      aria-hidden="true"
      class="mb-6"
    >
      <path
        d="M5 11a4 4 0 0 1 4-4h30a4 4 0 0 1 4 4v26a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V11Z"
        fill="currentColor"
        fill-opacity=".1"
        stroke="currentColor"
        stroke-width="2"
      />
      <path
        d="M15 7v34"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
