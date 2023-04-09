module.exports = {
  extends: ["eslint:recommended", "next", "turbo", "prettier"],
  plugins: ["simple-import-sort"],
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@next/next/no-html-link-for-pages": "off",
    '@typescript-eslint/ban-ts-comment': 'off',
  },
};
