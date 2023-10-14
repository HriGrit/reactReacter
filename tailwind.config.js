/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				es: "320px", // Custom extra small screen size
				sm: "783px", // Custom small screen size
				md: "784px", // Custom medium screen size
				lg: "1024px", // Custom large screen size
			},
		},
	},
	plugins: [],
};
