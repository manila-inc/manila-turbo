/** @type {import("tailwindcss").Config} */
module.exports = {
  presets: [require("@manila/tailwind-config")],
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
};
