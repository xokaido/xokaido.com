<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const label = $derived(i18n.t.stack.label);
	const tech = [
		'SvelteKit',
		'React',
		'Node.js',
		'TypeScript',
		'Swift',
		'Kotlin',
		'PostgreSQL',
		'AWS',
		'Claude API'
	];
</script>

<div class="stack">
	<div class="wrap inner">
		<span class="label">{label}</span>
		<ul>
			{#each tech as name (name)}
				<li>{name}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.stack {
		border-bottom: 1px solid var(--line);
		background: var(--bg);
		transition: background-color 0.35s var(--ease);
	}

	.inner {
		display: flex;
		align-items: center;
		gap: 1.5rem 2.5rem;
		padding-block: 1.4rem;
		flex-wrap: wrap;
	}

	.label {
		font-size: 0.76rem;
		font-weight: 600;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--ink-mute);
		flex-shrink: 0;
	}

	ul {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 0.6rem;
		list-style: none;
	}

	li {
		font-size: 0.84rem;
		font-weight: 500;
		color: var(--ink-soft);
		border: 1px solid var(--line);
		background: var(--bg-raise);
		border-radius: 999px;
		padding: 0.32rem 0.9rem;
		transition:
			border-color 0.2s var(--ease),
			color 0.2s var(--ease);
	}

	li:hover {
		border-color: var(--accent);
		color: var(--accent);
	}
</style>
