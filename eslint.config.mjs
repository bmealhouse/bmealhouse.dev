import next from "eslint-config-next";
import promise from "eslint-plugin-promise";
import unicorn from "eslint-plugin-unicorn";

const config = [
  { ignores: [".next/", "next-env.d.ts", "*.config.js"] },
  ...next,
  unicorn.configs.recommended,
  promise.configs["flat/recommended"],
  {
    rules: {
      "unicorn/prefer-node-protocol": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            props: false,
            ref: false,
          },
        },
      ],
    },
  },
];

export default config;
