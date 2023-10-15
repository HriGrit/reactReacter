/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				es: "320px", // Custom extra small screen size
				sm: "783px", // Custom small screen size
				md: "784px", // Custom medium screen size
				lp: "855px",
				mm: "963px",
				lg: "1024px", // Custom large screen size
				xxl: "1280px", // Custom extra large screen size
				sr: "1562px",
			},
		},
	},
	plugins: [],
};
