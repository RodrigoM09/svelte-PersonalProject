const config = {
	mode: 'jit',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		colors: {
			transparent: 'transparent',
			primaryColor: '#578e3e',
			buttonColor: '#204e72',
			secondaryButtonColor: '#337cb5'
		},
		extend: {
			backgroundImage: {
				'hero-img': "url('https://picsum.photos/300/300')"
			}
		}
	},

	plugins: [
		require('flowbite/plugin'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography')
	],
	darkMode: 'class'
};

module.exports = config;
