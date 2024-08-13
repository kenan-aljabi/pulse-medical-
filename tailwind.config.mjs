/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'custom-black': '#00000040',
			},
			fontFamily: {
				lexend: ['Lexend', 'sans-serif'],
			},
		},
	},
	plugins: [],
}