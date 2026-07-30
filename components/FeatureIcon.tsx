import type { SVGProps } from "react";

export type FeatureIconName =
  | "carpentry"
  | "metal"
  | "assembly"
  | "finishes"
  | "quality"
  | "oem"
  | "whiteLabel"
  | "custom"
  | "prototype"
  | "series"
  | "technical";

type FeatureIconProps = SVGProps<SVGSVGElement> & {
  name: FeatureIconName;
};

export function FeatureIcon({ name, ...props }: FeatureIconProps) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    ...props,
  };

  switch (name) {
    case "carpentry":
      return (
        <svg {...common}>
          <path d="M4 16.5 15.5 5" />
          <path d="m14 4 6 6" />
          <path d="m12.5 6.5 5 5" />
          <path d="M5 18.5h8" />
          <path d="M7 14.5h8" />
        </svg>
      );
    case "metal":
      return (
        <svg {...common}>
          <path d="M5 17.5h14" />
          <path d="M7 14.5h10" />
          <path d="M9 11.5h6" />
          <path d="M16.5 4.5v3" />
          <path d="M15 6h3" />
          <path d="M5.5 6.5 8 9" />
        </svg>
      );
    case "assembly":
      return (
        <svg {...common}>
          <path d="M7 8h10v8H7z" />
          <path d="M9 8V5.5h6V8" />
          <path d="M9 16v2.5h6V16" />
          <path d="M4.5 10.5H7" />
          <path d="M17 13.5h2.5" />
        </svg>
      );
    case "finishes":
      return (
        <svg {...common}>
          <path d="M5 18h9" />
          <path d="M7 15h6" />
          <path d="M9 12h8l2-5H7z" />
          <path d="M13 12v6" />
        </svg>
      );
    case "quality":
      return (
        <svg {...common}>
          <path d="M12 3.5 18 6v5.2c0 4-2.5 7.5-6 9.3-3.5-1.8-6-5.3-6-9.3V6z" />
          <path d="m8.8 12.3 2.1 2.1 4.5-5" />
        </svg>
      );
    case "oem":
      return (
        <svg {...common}>
          <path d="M4 19V9l5 3V9l5 3V7h6v12z" />
          <path d="M7 16h2" />
          <path d="M12 16h2" />
          <path d="M17 16h1" />
        </svg>
      );
    case "whiteLabel":
      return (
        <svg {...common}>
          <path d="M4.5 7.5h9l6 6-6 6-9-9z" />
          <path d="M8.5 10.5h.01" />
          <path d="m7 18 10-10" />
        </svg>
      );
    case "custom":
      return (
        <svg {...common}>
          <path d="M5 19 19 5" />
          <path d="m7 17 2 2" />
          <path d="m10 14 2 2" />
          <path d="m13 11 2 2" />
          <path d="m16 8 2 2" />
        </svg>
      );
    case "prototype":
      return (
        <svg {...common}>
          <path d="m12 4 7 4-7 4-7-4z" />
          <path d="M5 8v8l7 4 7-4V8" />
          <path d="M12 12v8" />
        </svg>
      );
    case "series":
      return (
        <svg {...common}>
          <path d="M7 7h10v10H7z" />
          <path d="M4 10h3" />
          <path d="M17 14h3" />
          <path d="M10 4v3" />
          <path d="M14 17v3" />
        </svg>
      );
    case "technical":
      return (
        <svg {...common}>
          <path d="M5 19h14" />
          <path d="M8 16 12 5l4 11" />
          <path d="M9.5 12h5" />
          <path d="M12 5v14" />
        </svg>
      );
  }
}
