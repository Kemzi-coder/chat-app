/** @type {import('tailwindcss').Config} */
const {Palette} = require("./src/lib/theme");

module.exports = {
	important: true,
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
			},
			colors: {
				primary: {
					DEFAULT: Palette.PRIMARY.MAIN,
					light: Palette.PRIMARY.LIGHT,
					dark: Palette.PRIMARY.DARK,
					contrastText: Palette.PRIMARY.CONTRAST_TEXT
				},
				secondary: {
					DEFAULT: Palette.SECONDARY.MAIN,
					light: Palette.SECONDARY.LIGHT,
					dark: Palette.SECONDARY.DARK,
					contrastText: Palette.SECONDARY.CONTRAST_TEXT
				},
				error: {
					DEFAULT: Palette.ERROR.MAIN,
					light: Palette.ERROR.LIGHT,
					dark: Palette.ERROR.DARK,
					contrastText: Palette.ERROR.CONTRAST_TEXT
				},
				warning: {
					DEFAULT: Palette.WARNING.MAIN,
					light: Palette.WARNING.LIGHT,
					dark: Palette.WARNING.DARK,
					contrastText: Palette.WARNING.CONTRAST_TEXT
				},
				info: {
					DEFAULT: Palette.INFO.MAIN,
					light: Palette.INFO.LIGHT,
					dark: Palette.INFO.DARK,
					contrastText: Palette.INFO.CONTRAST_TEXT
				},
				success: {
					DEFAULT: Palette.SUCCESS.MAIN,
					light: Palette.SUCCESS.LIGHT,
					dark: Palette.SUCCESS.DARK,
					contrastText: Palette.SUCCESS.CONTRAST_TEXT
				}
			}
		}
	},
	plugins: []
};
