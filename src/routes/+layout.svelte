<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
</script>

{#if $page.url.pathname !== '/auth/sign-in'}
	<Navbar />
{/if}

<slot />
