<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { projects } from '$lib/projects';

	const t = $derived(i18n.t.services);
	const names = $derived(i18n.t.work.items);

	/** Register entries that show each service at work, in the order of `t.items`. */
	const proof: string[][] = [
		['visit-svaneti', 'visit-kakheti', 'saint'],
		['stafika', 'mendex', 'avanto'],
		['kadri', 'ostati'],
		['menuhub', 'iveria'],
		['keda', 'gulani'],
		[]
	];

	const entry = (slug: string) => {
		const idx = projects.findIndex((p) => p.slug === slug);
		return { ...projects[idx], no: String(idx + 1).padStart(2, '0') };
	};
</script>

<section id="services">
	<div class="wrap">
		<div class="head">
			<div>
				<p class="label">{t.kicker}</p>
				<h2>{t.title}</h2>
			</div>
			<p class="sub">{t.sub}</p>
		</div>

		<ul>
			{#each t.items as item, idx (item.title)}
				<li>
					<h3>{item.title}</h3>
					<p>{item.desc}</p>
					<div class="proof">
						{#each proof[idx].map(entry) as p (p.slug)}
							<a href={p.url} target="_blank" rel="noopener noreferrer">
								<img
									src="/images/portfolio/{p.slug}@760.webp"
									alt=""
									loading="lazy"
									decoding="async"
									width="760"
									height="475"
								/>
								<span class="cap">
									<span class="no">№ {p.no}</span>
									<span class="name">{names[p.slug as keyof typeof names].title}</span>
								</span>
							</a>
						{:else}
							<a class="btn btn-secondary btn-sm" href="mailto:hello@xokaido.com?subject=Consulting">
								{i18n.t.cta.button}
							</a>
						{/each}
					</div>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.head {
		display: grid;
		grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
		gap: 16px clamp(40px, 7vw, 112px);
		align-items: end;
		margin-bottom: clamp(32px, 5vw, 56px);
	}

	h2 {
		font-size: clamp(30px, 4vw, 48px);
		line-height: 1.12;
	}

	.sub {
		color: var(--ink-soft);
		font-size: 18px;
		line-height: 28px;
	}

	ul {
		list-style: none;
		border-top: 1px solid var(--line-strong);
	}

	li {
		display: grid;
		grid-template-columns: minmax(0, 3fr) minmax(0, 4fr) minmax(0, 5fr);
		gap: 16px 40px;
		align-items: start;
		padding-block: 32px;
		border-bottom: 1px solid var(--line);
	}

	h3 {
		font-size: clamp(24px, 2.4vw, 30px);
		line-height: 1.2;
	}

	li > p {
		color: var(--ink-soft);
		font-size: 16px;
		line-height: 26px;
	}

	.proof {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 12px;
	}

	.proof a:not(.btn) {
		display: block;
		text-decoration: none;
	}

	.proof img {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 10;
		object-fit: cover;
		object-position: top center;
		border: 1px solid var(--line-strong);
		border-radius: var(--r-control);
		transition: border-color 0.15s var(--ease);
	}

	.proof a:hover img {
		border-color: var(--accent);
	}

	.cap {
		display: flex;
		align-items: baseline;
		gap: 8px;
		margin-top: 8px;
		min-width: 0;
	}

	.cap .name {
		font-size: 13px;
		line-height: 20px;
		color: var(--ink-soft);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.proof .btn {
		justify-self: start;
		grid-column: 1 / -1;
	}

	@media (max-width: 960px) {
		.head {
			grid-template-columns: minmax(0, 1fr);
		}

		li {
			grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
		}

		.proof {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 560px) {
		li {
			grid-template-columns: minmax(0, 1fr);
			gap: 12px;
			padding-block: 24px;
		}

		.proof {
			margin-top: 4px;
		}

		.cap {
			flex-direction: column;
			gap: 0;
		}
	}
</style>
