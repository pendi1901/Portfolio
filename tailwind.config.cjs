/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				ink: {
					950: "#060709",
					900: "#0a0b0f",
					850: "#0f1116",
					800: "#14161d",
					700: "#1c1f28",
					600: "#272b36",
				},
				accent: {
					DEFAULT: "#6366f1",
					soft: "#818cf8",
					deep: "#4338ca",
				},
				cyan: {
					glow: "#22d3ee",
				},
				amber: {
					glow: "#fbbf24",
				},
			},
			fontFamily: {
				sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
				display: ['"Instrument Serif"', 'Georgia', 'serif'],
				mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
			},
			letterSpacing: {
				tightest: "-0.045em",
			},
			screens: {
				midmd: "880px",
			},
			animation: {
				"aurora": "aurora 22s ease-in-out infinite",
				"marquee": "marquee 40s linear infinite",
				"float": "float 7s ease-in-out infinite",
				"pulse-ring": "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
			},
			keyframes: {
				aurora: {
					"0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
					"33%": { transform: "translate3d(6%,-4%,0) scale(1.12)" },
					"66%": { transform: "translate3d(-5%,5%,0) scale(0.94)" },
				},
				marquee: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-50%)" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-10px)" },
				},
				"pulse-ring": {
					"0%": { transform: "scale(1)", opacity: "0.7" },
					"70%, 100%": { transform: "scale(2.2)", opacity: "0" },
				},
			},
		},
	},
	plugins: [],
}
