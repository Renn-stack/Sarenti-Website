import nextPlugin from "eslint-config-next";

const config = [
  ...(Array.isArray(nextPlugin) ? nextPlugin : [nextPlugin]),
  {
    ignores: [".next/**", "node_modules/**"],
  },
];

export default config;
