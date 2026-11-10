<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const t = $derived(i18n.t);
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="wrap top">
		<div class="brand-col">
			<a class="brand" href="#top" aria-label="Xokaido Technologies — home">
				<img src="/images/logo-mark.png" alt="" width="36" height="28" loading="lazy" />
				<span>Xokaido Technologies</span>
			</a>
			<p>{t.footer.tagline}</p>
		</div>

		<nav aria-label="Footer">
			<h3>{t.footer.linksTitle}</h3>
			<a href="#services">{t.nav.services}</a>
			<a href="#work">{t.nav.work}</a>
			<a href="#founder">{t.nav.about}</a>
			<a href="#process">{t.nav.process}</a>
		</nav>

		<div class="col">
			<h3>{t.footer.contactTitle}</h3>
			<a href="mailto:hello@xokaido.com">hello@xokaido.com</a>
			<span>{t.footer.location}</span>
		</div>
	</div>

	<div class="wrap bottom">© {year} Xokaido Technologies LLC · {t.footer.rights}</div>
</footer>

<style>
	footer {
		border-top: 1px solid var(--line);
		background: var(--raise);
	}

	.top {
		display: grid;
		grid-template-columns: minmax(0, 6fr) minmax(0, 3fr) minmax(0, 3fr);
		gap: 40px 32px;
		padding-block: 56px 40px;
	}

	.brand {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		text-decoration: none;
		font-size: 17px;
		font-weight: 600;
		line-height: 1;
	}

	.brand img {
		width: 36px;
		height: auto;
	}

	.brand-col p {
		margin-top: 16px;
		color: var(--ink-soft);
		font-size: 15px;
		line-height: 24px;
		max-width: 360px;
	}

	nav,
	.col {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 8px;
		font-size: 15px;
		line-height: 24px;
	}

	h3 {
		font-family: var(--font-body);
		font-size: 14px;
		line-height: 20px;
		color: var(--ink-mute);
		margin-bottom: 4px;
	}

	nav a,
	.col a {
		text-decoration: none;
		transition: color 0.15s var(--ease);
	}

	nav a:hover,
	.col a:hover {
		color: var(--accent);
	}

	.col span {
		color: var(--ink-soft);
	}

	.bottom {
		border-top: 1px solid var(--line);
		padding-block: 20px;
		font-size: 13px;
		line-height: 20px;
		color: var(--ink-mute);
	}

	@media (max-width: 760px) {
		.top {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		.brand-col {
			grid-column: 1 / -1;
		}
	}
</style>
