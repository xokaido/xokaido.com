<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions';

	const t = $derived(i18n.t.services);

	const icons = [
		'M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v12a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 17.5v-12ZM2 9h20M5.5 6.5h.01M8.5 6.5h.01',
		'M7 4.5A2.5 2.5 0 0 1 9.5 2h5A2.5 2.5 0 0 1 17 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 7 19.5v-15ZM11 19h2',
		'M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z',
		'M12 2 3 7v10l9 5 9-5V7l-9-5ZM3 7l9 5m0 0 9-5m-9 5v10',
		'M6.5 19a4.5 4.5 0 1 1 .4-8.98 6 6 0 0 1 11.6 1.48A3.75 3.75 0 0 1 17.75 19H6.5Z',
		'M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18ZM12 7v5l3.5 2'
	];
</script>

<section id="services">
	<div class="wrap">
		<div class="section-head" use:reveal>
			<p class="kicker">{t.kicker}</p>
			<h2>{t.title}</h2>
			<p>{t.sub}</p>
		</div>
		<div class="grid">
			{#each t.items as item, idx (idx)}
				<article use:reveal={(idx % 3) * 90}>
					<div class="icon">
						<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<path d={icons[idx]} />
						</svg>
					</div>
					<h3>{item.title}</h3>
					<p>{item.desc}</p>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
		gap: 1.25rem;
	}

	article {
		background: var(--bg-raise);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 2rem 1.85rem;
		transition:
			transform 0.3s var(--ease),
			box-shadow 0.3s var(--ease),
			border-color 0.3s var(--ease),
			background-color 0.35s var(--ease);
	}

	article:hover {
		transform: translateY(-5px);
		border-color: var(--accent);
		box-shadow: 0 24px 48px -24px var(--shadow-color);
	}

	.icon {
		width: 50px;
		height: 50px;
		border-radius: 14px;
		background: var(--accent-soft);
		display: grid;
		place-items: center;
		margin-bottom: 1.4rem;
		color: var(--accent);
		transition:
			background 0.3s var(--ease),
			color 0.3s var(--ease);
	}

	article:hover .icon {
		background: var(--copper);
		color: #fff;
	}

	h3 {
		font-weight: 600;
		font-size: 1.28rem;
		margin-bottom: 0.6rem;
	}

	p {
		color: var(--ink-mute);
		font-size: 0.96rem;
		line-height: 1.65;
	}
</style>
