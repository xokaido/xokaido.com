<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions';

	const t = $derived(i18n.t.testimonials);
</script>

<section id="testimonials">
	<div class="wrap">
		<div class="section-head" use:reveal>
			<p class="kicker">{t.kicker}</p>
			<h2>{t.title}</h2>
		</div>
		<div class="grid">
			{#each t.items as item, idx (idx)}
				<figure use:reveal={idx * 90}>
					<svg class="mark" width="28" height="22" viewBox="0 0 28 22" fill="currentColor" aria-hidden="true">
						<path d="M0 22V13.6C0 5.9 4.4 1.1 11.5 0l1.3 3.4C8.4 4.6 6 7.3 5.8 10.6H12V22H0Zm16 0V13.6C16 5.9 20.4 1.1 27.5 0l1.3 3.4c-4.4 1.2-6.8 3.9-7 7.2H28V22H16Z" transform="scale(0.93)" />
					</svg>
					<blockquote>{item.quote}</blockquote>
					<figcaption>
						<span class="avatar" aria-hidden="true">{item.initials}</span>
						<span class="who">
							<strong>{item.name}</strong>
							<small>{item.role}</small>
						</span>
					</figcaption>
				</figure>
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

	figure {
		background: var(--bg-raise);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		padding: 2rem 1.85rem;
		display: flex;
		flex-direction: column;
		transition:
			border-color 0.3s var(--ease),
			background-color 0.35s var(--ease);
	}

	figure:hover {
		border-color: var(--accent);
	}

	.mark {
		color: var(--accent);
		opacity: 0.55;
		margin-bottom: 1.1rem;
	}

	blockquote {
		font-size: 1rem;
		line-height: 1.7;
		color: var(--ink-soft);
		flex: 1;
	}

	figcaption {
		display: flex;
		align-items: center;
		gap: 0.85rem;
		margin-top: 1.6rem;
	}

	.avatar {
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--copper-bright), var(--copper-deep));
		color: #fff;
		display: grid;
		place-items: center;
		font-size: 0.82rem;
		font-weight: 600;
		letter-spacing: 0.04em;
		flex-shrink: 0;
	}

	.who {
		display: flex;
		flex-direction: column;
		line-height: 1.35;
	}

	.who strong {
		font-size: 0.96rem;
	}

	.who small {
		color: var(--ink-mute);
		font-size: 0.84rem;
	}
</style>
