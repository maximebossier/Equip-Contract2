import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Equip Contract",
    short_name: "Equip Contract",
    description: "Fabricación contract B2B, OEM y white-label en Barcelona.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0b0e0c",
    theme_color: "#95c83d",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/assets/logo-equip-contract-transparent.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
