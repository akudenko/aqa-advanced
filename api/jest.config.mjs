/** @type {import('jest').Config} */
const config = {
  coverageProvider: "v8",
  reporters: [
    "default",
    "jest-html-reporters"
  ],
};

export default config;
