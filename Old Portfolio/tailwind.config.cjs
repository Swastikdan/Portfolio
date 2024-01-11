/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 'node_modules/preline/dist/*.js',],
	darkMode: 'class',
	theme: {
		extend: {},
	},
	plugins: [ 
		require('preline/plugin'),
	
],
}