/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primaryColor: '#15E8D8',
				hoverColor: '#2bc2b6',
				textSecondaryColor: '#c9d4d3',
				irisBlueColor: '#01B5C5',
				yellowColor: '#FEB60D',
				purpleColor: '#9771FF',
				irisBlueColor: '#01B5C5',
				headingColor: '#181A1E',
				textColor: '#4E545F',
			},
			boxShadow: {
				shadowPanel: 'rgba(17,12, 46, 0.15) 0px 48px 100px 0px',
			},
		},
	},
	plugins: [],
};
