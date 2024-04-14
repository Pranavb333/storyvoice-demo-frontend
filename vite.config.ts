import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],

	server: {
		proxy: {
			// This will not work in prod. Create an axios instance with baseURL configured for client side requests
			// For page.ts loads, give the full URL to fetch
			'/api': 'http://localhost:8080'
		}
	}
});
