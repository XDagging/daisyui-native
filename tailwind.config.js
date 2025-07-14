// This will updated automatically with the cli
const usedTheme = {
"base-100": "#FFFFFF",
    "base-200": "#F3F4F6",
    "base-300": "#E5E7EB",
    "base-content": "#1E293B",

    primary: "#2563EB",
    "primary-content": "#FFFFFF",

    secondary: "#64748B",
    "secondary-content": "#FFFFFF",

    accent: "#F59E42",
    "accent-content": "#FFFFFF",

    neutral: "#F1F5F9",
    "neutral-content": "#1E293B",

    info: "#0EA5E9",
    "info-content": "#FFFFFF",

    success: "#22C55E",
    "success-content": "#FFFFFF",

    warning: "#FACC15",
    "warning-content": "#1E293B",

    error: "#EF4444",
    "error-content": "#FFFFFF",

    borderRadius: {
        selector: 8,
        field: 6,
        box: 12,
    },
    borderThickness: 1,
    badgeHeight: 10

}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        "base-100": usedTheme["base-100"],
        "base-200": usedTheme["base-200"],
        "base-300": usedTheme["base-300"],
        "base-content": usedTheme["base-content"],

        primary: usedTheme.primary,
        "primary-content": usedTheme["primary-content"],

        secondary: usedTheme.secondary,
        "secondary-content": usedTheme["secondary-content"],

        accent: usedTheme.accent,
        "accent-content": usedTheme["accent-content"],

        neutral: usedTheme.neutral,
        "neutral-content": usedTheme["neutral-content"],

        info: usedTheme.info,
        "info-content": usedTheme["info-content"],

        success: usedTheme.success,
        "success-content": usedTheme["success-content"],

        warning: usedTheme.warning,
        "warning-content": usedTheme["warning-content"],

        error: usedTheme.error,
        "error-content": usedTheme["error-content"],
      }
    },
    

  },
  plugins: [],
};
