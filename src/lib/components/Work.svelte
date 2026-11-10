<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { projects, categories, type ProjectCategory } from '$lib/projects';

	const t = $derived(i18n.t.work);

	let filter = $state<ProjectCategory | 'all'>('all');

	/** Entry numbers are fixed by the register order, so they survive filtering. */
	const entries = projects.map((p, idx) => ({ ...p, no: String(idx + 1).padStart(2, '0') }));

	const shown = $derived(filter === 'all' ? entries : entries.filter((p) => p.category === filter));

	const counts = Object.fromEntries(
		categories.map((c) => [c, projects.filter((p) => p.category === c).length])
	) as Record<ProjectCategory, number>;
</script>

<section id="work" class="work">
	<div class="wrap">
		<div class="section-head">
			<p class="label">{t.kicker}</p>
			<h2>{t.title}</h2>
			<p>{t.sub}</p>
		</div>

		<div class="filters" role="group" aria-label={t.kicker}>
			<button type="button" class:on={filter === 'all'} aria-pressed={filter === 'all'} onclick={() => (filter = 'all')}>
				{t.filters.all}
				<span class="count">{projects.length}</span>
			</button>
			{#each categories as cat (cat)}
				<button type="button" class:on={filter === cat} aria-pressed={filter === cat} onclick={() => (filter = cat)}>
					{t.filters[cat]}
					<span class="count">{counts[cat]}</span>
				</button>
			{/each}
		</div>

		<div class="grid">
			{#each shown as p, idx (p.slug)}
				{@const item = t.items[p.slug as keyof typeof t.items]}
				<a class="entry" class:lead={idx === 0} href={p.url} target="_blank" rel="noopener noreferrer">
					<div class="shot">
						<img
							src="/images/portfolio/{p.slug}.webp"
							srcset="/images/portfolio/{p.slug}@760.webp 760w, /images/portfolio/{p.slug}.webp 1440w"
							sizes={idx === 0 ? '(max-width: 960px) 92vw, 700px' : '(max-width: 640px) 92vw, (max-width: 960px) 46vw, 380px'}
							alt="{item.title} — {p.domain}"
							loading="lazy"
							decoding="async"
							width="1440"
							height="900"
						/>
					</div>

					<div class="body">
						<div class="meta">
							<span class="no">№ {p.no}</span>
							<span class="domain">{p.domain}</span>
							<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-label={t.visit}>
								<path d="M7 17 17 7M9 7h8v8" />
							</svg>
						</div>
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
						<p class="tags">{item.tags.join(' · ')}</p>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.work {
		border-top: 1px solid var(--line);
	}

	/* ---------- Filters: text tabs, counts as quiet mono ---------- */
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
		margin-bottom: 32px;
	}

	.filters button {
		display: inline-flex;
		align-items: baseline;
		gap: 8px;
		height: 36px;
		padding-inline: 12px;
		border: none;
		border-radius: var(--r-control);
		background: none;
		font-size: 15px;
		line-height: 36px;
		color: var(--ink-soft);
		cursor: pointer;
		transition:
			background-color 0.15s var(--ease),
			color 0.15s var(--ease);
	}

	.filters button:hover {
		color: var(--ink);
	}

	.filters button.on {
		background: var(--raise);
		color: var(--ink);
	}

	.count {
		font-family: var(--font-mono);
		font-size: 12px;
		font-variant-numeric: tabular-nums;
		color: var(--ink-mute);
	}

	/* ---------- Entries ---------- */
	.grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 40px 24px;
	}

	.entry {
		display: flex;
		flex-direction: column;
		gap: 16px;
		text-decoration: none;
	}

	.entry.lead {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
		gap: 24px clamp(24px, 4vw, 56px);
		align-items: center;
		padding-bottom: 40px;
		border-bottom: 1px solid var(--line);
	}

	.shot {
		border: 1px solid var(--line-strong);
		border-radius: var(--r-card);
		overflow: hidden;
		background: var(--raise);
		transition: border-color 0.15s var(--ease);
	}

	.entry:hover .shot {
		border-color: var(--accent);
	}

	.shot img {
		width: 100%;
		height: auto;
		aspect-ratio: 1440 / 900;
		object-fit: cover;
		object-position: top center;
	}

	.meta {
		display: flex;
		align-items: center;
		gap: 12px;
		margin-bottom: 8px;
	}

	.meta .domain {
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.meta svg {
		margin-inline-start: auto;
		flex-shrink: 0;
		color: var(--ink-mute);
		transition:
			color 0.15s var(--ease),
			transform 0.15s var(--ease);
	}

	.entry:hover .meta svg {
		color: var(--accent);
		transform: translate(2px, -2px);
	}

	h3 {
		font-size: 22px;
		line-height: 28px;
		margin-bottom: 8px;
	}

	.lead h3 {
		font-size: clamp(26px, 2.6vw, 32px);
		line-height: 1.2;
		margin-bottom: 12px;
	}

	.body p {
		color: var(--ink-soft);
		font-size: 15px;
		line-height: 24px;
	}

	.lead .body p:not(.tags) {
		font-size: 17px;
		line-height: 28px;
	}

	.body .tags {
		margin-top: 12px;
		font-size: 13px;
		line-height: 20px;
		color: var(--ink-mute);
	}

	@media (max-width: 960px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.entry.lead {
			grid-template-columns: minmax(0, 1fr);
		}
	}

	@media (max-width: 640px) {
		.grid {
			grid-template-columns: minmax(0, 1fr);
			gap: 32px;
		}

		.entry.lead {
			padding-bottom: 32px;
		}
	}
</style>
