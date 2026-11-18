<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const t = $derived(i18n.t.workspace);

	const plans = [
		{ name: 'Business Starter', price: '$8.40' },
		{ name: 'Business Standard', price: '$16.80' },
		{ name: 'Business Plus', price: '$26.40' }
	];

	const order = (name: string) =>
		`mailto:hello@xokaido.com?subject=${encodeURIComponent(`Google Workspace — ${name}`)}`;
</script>

<svelte:head>
	<title>{t.meta.title}</title>
	<meta name="description" content={t.meta.description} />
	<meta property="og:title" content={t.meta.title} />
	<meta property="og:description" content={t.meta.description} />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="/images/xokaido-portrait.jpg" />
</svelte:head>

<section class="intro">
	<div class="wrap">
		<div class="section-head">
			<p class="label">{t.kicker}</p>
			<h1>{t.title}</h1>
			<p>{t.sub}</p>
		</div>

		<ul class="plans">
			{#each plans as plan, idx (plan.name)}
				<li class:featured={idx === 1}>
					<span class="no">№ {String(idx + 1).padStart(2, '0')}</span>
					<h2>{plan.name}</h2>
					<p class="price">
						<span class="amount">{plan.price}</span>
						<span class="per">{t.perUser}</span>
					</p>
					<ul class="features">
						{#each t.features[idx] as f (f)}
							<li>{f}</li>
						{/each}
					</ul>
					<a
						class="btn {idx === 1 ? 'btn-primary' : 'btn-secondary'}"
						href={order(plan.name)}>{t.choose}</a
					>
				</li>
			{/each}
		</ul>

		<p class="note">
			{t.note}
			<a href="https://workspace.google.com/" target="_blank" rel="noopener noreferrer">{t.learnMore} ↗</a>
		</p>
	</div>
</section>

<section class="included">
	<div class="wrap">
		<h2>{t.includedTitle}</h2>
		<ol>
			{#each t.included as item, idx (item.title)}
				<li>
					<span class="no">{String(idx + 1).padStart(2, '0')}</span>
					<h3>{item.title}</h3>
					<p>{item.desc}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<section class="cloud">
	<div class="wrap grid">
		<div>
			<p class="label">{t.cloud.kicker}</p>
			<h2>{t.cloud.title}</h2>
		</div>
		<p class="desc">{t.cloud.desc}</p>
	</div>
</section>

<section class="cta">
	<div class="wrap">
		<h2>{t.cta.title}</h2>
		<p>{t.cta.sub}</p>
		<a class="btn btn-primary" href="mailto:hello@xokaido.com?subject=Google%20Workspace">{t.cta.button}</a>
	</div>
</section>

<style>
	h1 {
		font-size: clamp(34px, 5vw, 60px);
		line-height: 1.08;
		letter-spacing: -0.025em;
	}

	:global(:lang(ka)) h1 {
		font-size: clamp(30px, 4vw, 48px);
		line-height: 1.2;
		letter-spacing: 0;
	}

	.section-head {
		max-width: 760px;
	}

	.plans {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 16px;
	}

	.plans > li {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 28px;
		background: var(--card);
		border: 1px solid var(--line-strong);
		border-radius: var(--r-card);
		box-shadow: var(--shadow);
	}

	.plans > li.featured {
		border-color: var(--accent);
	}

	.plans h2 {
		font-size: 26px;
		line-height: 1.2;
	}

	.price {
		display: flex;
		flex-direction: column;
		gap: 2px;
		padding-bottom: 16px;
		border-bottom: 1px solid var(--line);
	}

	.amount {
		font-family: var(--font-display);
		font-size: 48px;
		line-height: 1;
		font-variant-numeric: tabular-nums;
	}

	.per {
		font-size: 14px;
		color: var(--ink-mute);
	}

	.features {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 8px;
		flex: 1;
		font-size: 15px;
		line-height: 22px;
		color: var(--ink-soft);
	}

	.features li {
		padding-inline-start: 20px;
		position: relative;
	}

	.features li::before {
		content: '';
		position: absolute;
		left: 2px;
		top: 9px;
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--accent);
	}

	.plans .btn {
		align-self: stretch;
	}

	.note {
		margin-top: 24px;
		font-size: 14px;
		line-height: 22px;
		color: var(--ink-mute);
		max-width: 760px;
	}

	.note a {
		color: var(--ink);
		text-underline-offset: 4px;
		text-decoration-color: var(--line-strong);
		white-space: nowrap;
	}

	.note a:hover {
		text-decoration-color: var(--accent);
	}

	.included,
	.cloud,
	.cta {
		border-top: 1px solid var(--line);
	}

	.included h2 {
		margin-bottom: clamp(24px, 4vw, 40px);
	}

	ol {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 32px;
	}

	ol li {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding-top: 16px;
		border-top: 1px solid var(--line-strong);
	}

	ol h3 {
		font-size: 24px;
		line-height: 1.25;
	}

	ol p {
		color: var(--ink-soft);
		font-size: 16px;
		line-height: 26px;
	}

	.grid {
		display: grid;
		grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
		gap: 16px clamp(40px, 7vw, 112px);
		align-items: end;
	}

	.desc {
		color: var(--ink-soft);
		font-size: 18px;
		line-height: 28px;
	}

	.cta .wrap {
		max-width: 640px;
		margin-inline: auto;
		text-align: center;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
	}

	.cta p {
		color: var(--ink-soft);
		font-size: 17px;
		line-height: 28px;
		margin-bottom: 8px;
	}

	@media (max-width: 960px) {
		.plans,
		ol {
			grid-template-columns: minmax(0, 1fr);
		}

		.grid {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
