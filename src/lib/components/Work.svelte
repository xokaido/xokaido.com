<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions';

	const t = $derived(i18n.t.work);
	const covers = ['/images/work-01.svg', '/images/work-02.svg', '/images/work-03.svg'];
</script>

<section id="work" class="work">
	<div class="wrap">
		<div class="section-head" use:reveal>
			<p class="kicker">{t.kicker}</p>
			<h2>{t.title}</h2>
			<p>{t.sub}</p>
		</div>
		<div class="grid">
			{#each t.items as item, idx (idx)}
				<article use:reveal={idx * 90}>
					<div class="cover">
						<img src={covers[idx]} alt={item.title} loading="lazy" width="800" height="560" />
					</div>
					<div class="body">
						<div class="tags">
							{#each item.tags as tag (tag)}
								<span>{tag}</span>
							{/each}
						</div>
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.work {
		background: var(--bg-alt);
		transition: background-color 0.35s var(--ease);
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 1.5rem;
	}

	article {
		background: var(--bg-raise);
		border: 1px solid var(--line);
		border-radius: var(--radius);
		overflow: hidden;
		transition:
			transform 0.3s var(--ease),
			box-shadow 0.3s var(--ease),
			border-color 0.3s var(--ease),
			background-color 0.35s var(--ease);
	}

	article:hover {
		transform: translateY(-6px);
		border-color: var(--accent);
		box-shadow: 0 30px 60px -28px var(--shadow-color);
	}

	.cover {
		overflow: hidden;
		border-bottom: 1px solid var(--line);
	}

	.cover img {
		width: 100%;
		height: auto;
		aspect-ratio: 800 / 560;
		object-fit: cover;
		transition: transform 0.5s var(--ease);
	}

	article:hover .cover img {
		transform: scale(1.04);
	}

	.body {
		padding: 1.6rem 1.7rem 1.8rem;
	}

	.tags {
		display: flex;
		gap: 0.45rem;
		margin-bottom: 0.9rem;
		flex-wrap: wrap;
	}

	.tags span {
		font-size: 0.72rem;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--accent);
		background: var(--accent-soft);
		border-radius: 999px;
		padding: 0.28rem 0.75rem;
	}

	h3 {
		font-weight: 600;
		font-size: 1.3rem;
		margin-bottom: 0.55rem;
	}

	p {
		color: var(--ink-mute);
		font-size: 0.96rem;
		line-height: 1.65;
	}
</style>
