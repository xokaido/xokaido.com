<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { projects } from '$lib/projects';

	const t = $derived(i18n.t.hero);
	const items = $derived(i18n.t.work.items);

	let active = $state(0);
	/** Screenshots are only requested once their entry has been looked at. */
	let seen = $state<number[]>([0]);

	function select(idx: number) {
		active = idx;
		if (!seen.includes(idx)) seen.push(idx);
	}

	const no = (idx: number) => String(idx + 1).padStart(2, '0');
	const current = $derived(projects[active]);
	const currentItem = $derived(items[current.slug as keyof typeof items]);
</script>

<section class="hero" id="top">
	<div class="wrap grid">
		<div class="copy">
			<p class="place">{t.place}</p>
			<h1>{t.title}</h1>
			<p class="lede">{t.lede}</p>
			<div class="actions">
				<a class="btn btn-primary" href="#contact">{t.cta1}</a>
				<a class="btn btn-secondary" href="#work">{t.cta2}</a>
			</div>
			<dl class="facts">
				{#each t.facts as f (f.label)}
					<div>
						<dt>{f.label}</dt>
						<dd>{f.value}</dd>
					</div>
				{/each}
			</dl>
		</div>

		<div class="register" aria-label={t.registerLabel} role="group">
			<a class="plate" href={current.url} target="_blank" rel="noopener noreferrer">
				<div class="shots">
					{#each projects as p, idx (p.slug)}
						{#if seen.includes(idx)}
							<img
								class:on={idx === active}
								src="/images/portfolio/{p.slug}@760.webp"
								srcset="/images/portfolio/{p.slug}@760.webp 760w, /images/portfolio/{p.slug}.webp 1440w"
								sizes="(max-width: 960px) 92vw, 620px"
								alt={idx === active ? `${items[p.slug as keyof typeof items].title} — ${p.domain}` : ''}
								width="1440"
								height="900"
								fetchpriority={idx === 0 ? 'high' : 'auto'}
							/>
						{/if}
					{/each}
				</div>
				<div class="caption">
					<span class="no">№ {no(active)}</span>
					<span class="name">{currentItem.title}</span>
					<span class="kind">{currentItem.tags[0]}</span>
					<span class="domain">{current.domain}</span>
					<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-label={t.open}>
						<path d="M7 17 17 7M9 7h8v8" />
					</svg>
				</div>
			</a>

			<ol class="index">
				{#each projects as p, idx (p.slug)}
					<li>
						<button
							type="button"
							class:on={idx === active}
							aria-pressed={idx === active}
							onmouseenter={() => select(idx)}
							onfocus={() => select(idx)}
							onclick={() => select(idx)}
						>
							<span class="no">{no(idx)}</span>
							<span class="title">{items[p.slug as keyof typeof items].title}</span>
						</button>
					</li>
				{/each}
			</ol>
		</div>
	</div>
</section>

<style>
	.hero {
		padding-block: clamp(40px, 6vw, 72px) clamp(56px, 7vw, 88px);
	}

	.grid {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: clamp(40px, 5vw, 80px);
		align-items: center;
		min-height: min(720px, calc(100vh - 64px - 160px));
	}

	.copy {
		animation: enter 0.5s var(--ease) both;
	}

	.register {
		animation: enter 0.5s 0.06s var(--ease) both;
	}

	@keyframes enter {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
	}

	.place {
		font-size: 14px;
		line-height: 20px;
		color: var(--ink-mute);
		margin-bottom: 20px;
	}

	h1 {
		font-size: clamp(36px, 4.3vw, 58px);
		line-height: 1.06;
		letter-spacing: -0.025em;
	}

	:global(:lang(ka)) h1 {
		font-size: clamp(30px, 3.5vw, 46px);
		line-height: 1.2;
	}

	:global(:lang(ru)) h1 {
		font-size: clamp(32px, 3.8vw, 50px);
		line-height: 1.1;
	}

	.lede {
		margin-top: 24px;
		font-size: 18px;
		line-height: 28px;
		color: var(--ink-soft);
		max-width: 520px;
	}

	.actions {
		margin-top: 32px;
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}

	.facts {
		margin-top: 48px;
		padding-top: 24px;
		border-top: 1px solid var(--line);
		display: flex;
		flex-wrap: wrap;
		gap: 16px 40px;
	}

	.facts dt {
		font-size: 13px;
		line-height: 20px;
		color: var(--ink-mute);
	}

	.facts dd {
		font-family: var(--font-display);
		font-size: 24px;
		line-height: 32px;
		font-variant-numeric: tabular-nums;
	}

	.facts div {
		display: flex;
		flex-direction: column-reverse;
	}

	/* ---------- The register: the one rich moment on the page ---------- */
	.plate {
		display: block;
		text-decoration: none;
		background: var(--card);
		border: 1px solid var(--line-strong);
		border-radius: var(--r-panel);
		overflow: hidden;
		box-shadow: var(--shadow);
	}

	.shots {
		position: relative;
		aspect-ratio: 1440 / 900;
		background: var(--raise);
	}

	.shots img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: top center;
		opacity: 0;
		transition: opacity 0.3s var(--ease);
	}

	.shots img.on {
		opacity: 1;
	}

	.caption {
		display: flex;
		align-items: baseline;
		gap: 12px;
		padding: 12px 16px;
		border-top: 1px solid var(--line);
		min-width: 0;
	}

	.caption .name {
		font-size: 15px;
		font-weight: 500;
		white-space: nowrap;
	}

	.caption .kind {
		font-size: 13px;
		color: var(--ink-mute);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		min-width: 0;
	}

	.caption .domain {
		margin-inline-start: auto;
		white-space: nowrap;
	}

	.caption svg {
		align-self: center;
		flex-shrink: 0;
		color: var(--ink-mute);
		transition: color 0.15s var(--ease);
	}

	.plate:hover .caption svg {
		color: var(--accent);
	}

	.index {
		list-style: none;
		margin-top: 12px;
		columns: 3;
		column-gap: 8px;
	}

	.index li {
		break-inside: avoid;
	}

	.index button {
		display: flex;
		align-items: baseline;
		gap: 10px;
		width: 100%;
		height: 32px;
		padding-inline: 8px;
		border: none;
		border-radius: 6px;
		background: none;
		text-align: start;
		font-size: 14px;
		line-height: 32px;
		color: var(--ink-soft);
		cursor: pointer;
		transition:
			background-color 0.15s var(--ease),
			color 0.15s var(--ease);
	}

	.index .no {
		color: var(--ink-mute);
	}

	.index .title {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.index button.on {
		background: var(--raise);
		color: var(--ink);
	}

	.index button.on .no {
		color: var(--accent);
	}

	@media (max-width: 960px) {
		.grid {
			grid-template-columns: minmax(0, 1fr);
			min-height: 0;
		}

		.facts {
			margin-top: 40px;
		}
	}

	@media (max-width: 560px) {
		.index {
			columns: 2;
		}

		.index button {
			height: 40px;
			line-height: 40px;
		}

		.caption .kind {
			display: none;
		}

		.lede {
			font-size: 17px;
		}

		.facts {
			flex-direction: column;
			gap: 12px;
		}

		.facts div {
			flex-direction: row-reverse;
			justify-content: flex-end;
			align-items: baseline;
			gap: 16px;
		}

		.facts dd {
			min-width: 96px;
		}

		.actions .btn {
			flex: 1 1 auto;
		}
	}
</style>
