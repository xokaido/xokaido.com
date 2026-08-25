<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions';
	import { projects, categories, type ProjectCategory } from '$lib/projects';

	const t = $derived(i18n.t.work);

	let filter = $state<ProjectCategory | 'all'>('all');

	const shown = $derived(
		filter === 'all' ? projects : projects.filter((p) => p.category === filter)
	);

	const counts = $derived(
		Object.fromEntries(
			categories.map((c) => [c, projects.filter((p) => p.category === c).length])
		) as Record<ProjectCategory, number>
	);
</script>

<section id="work" class="work">
	<div class="wrap">
		<div class="section-head" use:reveal>
			<p class="kicker">{t.kicker}</p>
			<h2>{t.title}</h2>
			<p>{t.sub}</p>
		</div>

		<div class="filters" use:reveal={80}>
			<button
				type="button"
				class="chip"
				class:on={filter === 'all'}
				aria-pressed={filter === 'all'}
				onclick={() => (filter = 'all')}
			>
				{t.filters.all}
				<span class="count">{projects.length}</span>
			</button>
			{#each categories as cat (cat)}
				<button
					type="button"
					class="chip"
					class:on={filter === cat}
					aria-pressed={filter === cat}
					onclick={() => (filter = cat)}
				>
					{t.filters[cat]}
					<span class="count">{counts[cat]}</span>
				</button>
			{/each}
		</div>

		<div class="grid">
			{#each shown as p, idx (p.slug)}
				{@const item = t.items[p.slug as keyof typeof t.items]}
				<a
					class="card"
					href={p.url}
					target="_blank"
					rel="noopener noreferrer"
					use:reveal={Math.min(idx, 5) * 70}
				>
					<div class="shot">
						<div class="chrome" aria-hidden="true">
							<span class="dot"></span><span class="dot"></span><span class="dot"></span>
							<span class="addr">{p.domain}</span>
						</div>
						<img
							src="/images/portfolio/{p.slug}.webp"
							srcset="/images/portfolio/{p.slug}@760.webp 760w, /images/portfolio/{p.slug}.webp 1440w"
							sizes="(max-width: 760px) 92vw, 590px"
							alt="{item.title} — {p.domain}"
							loading="lazy"
							decoding="async"
							width="1440"
							height="900"
						/>
					</div>

					<div class="body">
						<div class="tags">
							{#each item.tags as tag (tag)}
								<span>{tag}</span>
							{/each}
						</div>
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
						<span class="visit">
							{t.visit}
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d="M7 17 17 7M9 7h8v8"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.work {
		background: var(--bg-alt);
		transition: background-color 0.35s var(--ease);
	}

	/* ---------- Filters ---------- */
	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 0.6rem;
		margin-bottom: 2.2rem;
	}

	.chip {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		background: var(--bg-raise);
		border: 1px solid var(--line);
		border-radius: 999px;
		padding: 0.5rem 1.05rem;
		font-size: 0.9rem;
		font-weight: 600;
		cursor: pointer;
		transition:
			border-color 0.25s var(--ease),
			background 0.25s var(--ease),
			color 0.25s var(--ease);
	}

	.chip:hover {
		border-color: var(--accent);
		color: var(--accent);
	}

	.chip.on {
		background: var(--accent);
		border-color: var(--accent);
		color: #fff;
	}

	.count {
		font-size: 0.72rem;
		font-variant-numeric: tabular-nums;
		color: var(--ink-mute);
		background: var(--bg-alt);
		border-radius: 999px;
		padding: 0.1rem 0.45rem;
		transition:
			background 0.25s var(--ease),
			color 0.25s var(--ease);
	}

	.chip.on .count {
		background: rgba(255, 255, 255, 0.22);
		color: #fff;
	}

	/* ---------- Grid ---------- */
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(min(400px, 100%), 1fr));
		gap: 1.75rem;
	}

	.card {
		display: flex;
		flex-direction: column;
		text-decoration: none;
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

	.card:hover {
		transform: translateY(-6px);
		border-color: var(--accent);
		box-shadow: 0 30px 60px -28px var(--shadow-color);
	}

	/* ---------- Screenshot with browser chrome ---------- */
	.shot {
		border-bottom: 1px solid var(--line);
		background: var(--bg-alt);
	}

	.chrome {
		display: flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.6rem 0.85rem;
		border-bottom: 1px solid var(--line);
		background: var(--bg-alt);
	}

	.dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: var(--line);
		flex-shrink: 0;
	}

	.addr {
		margin-inline-start: 0.5rem;
		min-width: 0;
		flex: 1;
		font-size: 0.72rem;
		color: var(--ink-mute);
		background: var(--bg-raise);
		border-radius: 999px;
		padding: 0.16rem 0.7rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		transition: background-color 0.35s var(--ease);
	}

	.shot img {
		width: 100%;
		height: auto;
		aspect-ratio: 1440 / 900;
		object-fit: cover;
		object-position: top center;
		transition: transform 0.55s var(--ease);
	}

	.card:hover .shot img {
		transform: scale(1.035);
	}

	/* ---------- Body ---------- */
	.body {
		display: flex;
		flex-direction: column;
		flex: 1;
		padding: 1.5rem 1.6rem 1.7rem;
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

	.body p {
		color: var(--ink-mute);
		font-size: 0.96rem;
		line-height: 1.65;
	}

	.visit {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		margin-top: auto;
		padding-top: 1.15rem;
		font-size: 0.88rem;
		font-weight: 600;
		color: var(--accent);
	}

	.visit svg {
		transition: transform 0.25s var(--ease);
	}

	.card:hover .visit svg {
		transform: translate(2px, -2px);
	}
</style>
