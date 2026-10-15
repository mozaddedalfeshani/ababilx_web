import { useId } from "react";

export function SparkleIcon() {
  return (
    <svg
      className="vx-badge-star"
      width="18"
      height="20"
      viewBox="0 0 24 24"
      fill="#ffffff"
      aria-hidden="true"
    >
      <path d="M12 2.6C12.55 2.6 12.88 3.15 13.08 4.7c.62 4.7 1.52 5.6 6.22 6.22 1.55.2 2.1.53 2.1 1.08s-.55.88-2.1 1.08c-4.7.62-5.6 1.52-6.22 6.22-.2 1.55-.53 2.1-1.08 2.1s-.88-.55-1.08-2.1c-.62-4.7-1.52-5.6-6.22-6.22C3.15 12.88 2.6 12.55 2.6 12s.55-.88 2.1-1.08c4.7-.62 5.6-1.52 6.22-6.22C11.12 3.15 11.45 2.6 12 2.6Z" />
    </svg>
  );
}

export function DualPillIcon() {
  const id = useId();
  const left = `${id}-l`;
  const right = `${id}-r`;
  return (
    <svg className="vx-stat-icon" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id={left} x1="3" y1="2" x2="14" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.38" />
          <stop offset="1" stopColor="#3a3a3a" stopOpacity="0.62" />
        </linearGradient>
        <linearGradient id={right} x1="13" y1="2" x2="24" y2="22" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3a3a3a" stopOpacity="0.38" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0.62" />
        </linearGradient>
      </defs>
      <rect x="3.4" y="2.6" width="7.2" height="18.8" rx="3.6" fill={`url(#${left})`} />
      <rect x="13.4" y="2.6" width="7.2" height="18.8" rx="3.6" fill={`url(#${right})`} />
      <rect x="9.2" y="10.9" width="5.6" height="2.2" rx="1.1" fill="#4a4a4a" />
    </svg>
  );
}

export function DownloadTileIcon() {
  return (
    <svg className="vx-stat-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="2.4" y="2.4" width="19.2" height="19.2" rx="6.2" fill="#ffffff" />
      <g fill="none" stroke="#111111" strokeWidth="1.85" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 7.1v7.4" />
        <path d="M8.15 12.35L12 16.2l3.85-3.85" />
      </g>
    </svg>
  );
}

export function AvatarsIcon() {
  return (
    <svg className="vx-stat-icon-wide" viewBox="0 0 40 22" aria-hidden="true">
      <circle cx="10.2" cy="11" r="9.2" fill="#2b2b2b" />
      <path d="M5.6 9.4 6.4 5.6l2.7 2.6ZM14.8 9.4 14 5.6l-2.7 2.6Z" fill="#f4f4f4" />
      <ellipse cx="10.2" cy="12.1" rx="4.15" ry="3.7" fill="#f4f4f4" />
      <circle cx="8.7" cy="11.6" r="0.7" fill="#1a1a1a" />
      <circle cx="11.7" cy="11.6" r="0.7" fill="#1a1a1a" />

      <circle cx="20.2" cy="11" r="9.2" fill="#ffffff" />
      <circle cx="17.4" cy="9.4" r="1.7" fill="#111111" />
      <circle cx="23" cy="9.4" r="1.7" fill="#111111" />
      <ellipse cx="20.2" cy="12.4" rx="0.9" ry="0.6" fill="#111111" />
      <path d="M17.6 14.6c1.5 1.4 3.7 1.4 5.2 0" fill="none" stroke="#111111" strokeWidth="1.2" strokeLinecap="round" />

      <circle cx="30.2" cy="11" r="9.2" fill="#f26b1d" />
      <text
        x="30.2"
        y="15.1"
        fill="#ffffff"
        fontFamily="var(--font-vx-sans), Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="12.5"
        textAnchor="middle"
      >
        e
      </text>
    </svg>
  );
}
