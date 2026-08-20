import nextVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextVitals,
  {
    ignores: [".next/**", ".vercel/**", "node_modules/**"],
  },
];

export default config;
