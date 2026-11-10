<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Stack from '$lib/components/Stack.svelte';
	import Services from '$lib/components/Services.svelte';
	import Work from '$lib/components/Work.svelte';
	import Founder from '$lib/components/Founder.svelte';
	import Process from '$lib/components/Process.svelte';
	import Contact from '$lib/components/Contact.svelte';

	const meta = $derived(i18n.t.meta);
</script>

<svelte:head>
	<title>{meta.title}</title>
	<meta name="description" content={meta.description} />
	<meta property="og:title" content={meta.title} />
	<meta property="og:description" content={meta.description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/images/xokaido-portrait.jpg" />
</svelte:head>

<Hero />
<Stack />
<Services />
<Work />
<Founder />
<Process />
<Contact />
