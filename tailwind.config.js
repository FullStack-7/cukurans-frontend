/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryColor: '#15E8D8',
				textColor: '#fffff',
				textSecondaryColor: '#c9d4d3',
				hoverColor: '#17b3a5',
			},
			boxShadow: {
				shadowPanel: 'rgba(17,12, 46, 0.15) 0px 48px 100px 0px',
			},
		},
	},
	plugins: [],
};
