module.exports = {
  extends: "next/core-web-vitals",
  plugins: ["eslint-plugin-import-helpers"],
  rules: {
    "import-helpers/order-imports": [
      "warn",
      {
        groups: [
          "type",
          "/next/",
          "/react/",
          "module",
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
  },
};
