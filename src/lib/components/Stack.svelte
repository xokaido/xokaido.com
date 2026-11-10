<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const label = $derived(i18n.t.stack.label);
	const tech = ['SvelteKit', 'React', 'Node.js', 'TypeScript', 'Swift', 'Kotlin', 'PostgreSQL', 'AWS', 'Claude API'];
</script>

<div class="stack">
	<div class="wrap inner">
		<span class="name">{label}</span>
		<ul>
			{#each tech as name (name)}
				<li>{name}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.stack {
		border-block: 1px solid var(--line);
	}

	.inner {
		display: flex;
		align-items: baseline;
		gap: 12px 32px;
		padding-block: 20px;
		flex-wrap: wrap;
	}

	.name {
		font-size: 14px;
		color: var(--ink-mute);
	}

	ul {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 8px 24px;
	}

	li {
		font-family: var(--font-mono);
		font-size: 13px;
		line-height: 20px;
		color: var(--ink-soft);
	}
</style>
