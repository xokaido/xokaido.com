<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { i18n } from '$lib/i18n.svelte';
	import { theme } from '$lib/theme.svelte';

	let { children } = $props();

	onMount(() => {
		i18n.init();
		theme.init();
	});
</script>

<svelte:head>
	<link rel="icon" href="/images/logo-mark.png" type="image/png" />
</svelte:head>

<a class="skip-link" href="#main">Skip to content</a>
<Header />
<main id="main">
	{@render children()}
</main>
<Footer />
