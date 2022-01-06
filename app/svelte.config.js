import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import json from '@rollup/plugin-json'

/** @type {import('@sveltejs/kit').Config} */
const config1 = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: () => {
			return {
				resolve: {
					alias: {
						'./runtimeConfig': './runtimeConfig.browser'
					}
				},
				plugins: [
					json(),
				]
			};
		},
		ssr: false
	}
};

export default config1;
