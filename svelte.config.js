import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter({ pages: "build", assets: "build", fallback: null, precompress: false, strict: true }),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/project2' : ''
		  },
		  
		prerender: {
			handleHttpError: ({ path, status }) => {
				// Log or handle 404 errors gracefully during the build
				if (status === 404) {
					console.warn(`Prerendering failed: ${status} for ${path}`);
				}
			}
		}
	}
};

export default config;