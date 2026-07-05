<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions';

	const t = $derived(i18n.t.process);
</script>

<section id="process" class="process">
	<div class="wrap">
		<div class="section-head" use:reveal>
			<p class="kicker">{t.kicker}</p>
			<h2>{t.title}</h2>
			<p>{t.sub}</p>
		</div>
		<div class="grid">
			{#each t.steps as step, idx (idx)}
				<div class="step" use:reveal={idx * 90}>
					<span class="num">0{idx + 1}</span>
					<h3>{step.title}</h3>
					<p>{step.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.process {
		background: var(--bg-alt);
		transition: background-color 0.35s var(--ease);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
		gap: 1.5rem 1.25rem;
	}

	.step {
		position: relative;
		border-top: 1px solid var(--line);
		padding-top: 1.75rem;
	}

	.num {
		font-family: var(--font-display);
		font-size: 1rem;
		font-weight: 600;
		color: var(--accent);
		position: absolute;
		top: -0.8rem;
		left: 0;
		background: var(--bg-alt);
		padding-right: 0.8rem;
		transition: background-color 0.35s var(--ease);
	}

	h3 {
		font-weight: 600;
		font-size: 1.24rem;
		margin-bottom: 0.55rem;
	}

	p {
		color: var(--ink-mute);
		font-size: 0.95rem;
	}
</style>
