/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				FS: "FS",
				Flight: "Flight",
			},
		},
		keyframes: {
			"bg-position": {
				"0%": { backgroundPosition: "0% 50%" },
				"100%": { backgroundPosition: "100% 50%" },
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
};
