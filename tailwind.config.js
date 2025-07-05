




const themeBeingUsed = {
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
};





/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        "base-100": themeBeingUsed["base-100"],
        "base-200": themeBeingUsed["base-200"],
        "base-300": themeBeingUsed["base-300"],
        "base-content": themeBeingUsed["base-content"],

        primary: themeBeingUsed.primary,
        "primary-content": themeBeingUsed["primary-content"],

        secondary: themeBeingUsed.secondary,
        "secondary-content": themeBeingUsed["secondary-content"],

        accent: themeBeingUsed.accent,
        "accent-content": themeBeingUsed["accent-content"],

        neutral: themeBeingUsed.neutral,
        "neutral-content": themeBeingUsed["neutral-content"],

        info: themeBeingUsed.info,
        "info-content": themeBeingUsed["info-content"],

        success: themeBeingUsed.success,
        "success-content": themeBeingUsed["success-content"],

        warning: themeBeingUsed.warning,
        "warning-content": themeBeingUsed["warning-content"],

        error: themeBeingUsed.error,
        "error-content": themeBeingUsed["error-content"],
      }
    },
    

  },
  plugins: [],
};
