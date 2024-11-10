import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [sveltekit()], // Add a comma here to separate properties

	// Configure Vitest if you're using it for testing
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});