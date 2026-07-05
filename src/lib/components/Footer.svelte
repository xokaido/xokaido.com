<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const t = $derived(i18n.t);
	const year = new Date().getFullYear();
</script>

<footer>
	<div class="wrap top">
		<div class="col brand-col">
			<img class="logo" src="/images/logo-full.png" alt="Xokaido Technologies LLC" width="230" height="138" loading="lazy" />
			<p>{t.footer.tagline}</p>
		</div>
		<nav class="col" aria-label="Footer">
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
	<div class="wrap bottom">
		<span>© {year} Xokaido Technologies LLC. {t.footer.rights}</span>
		<span>{t.footer.made}</span>
	</div>
</footer>

<style>
	footer {
		background: var(--dark);
		color: var(--dark-mute);
		font-size: 0.94rem;
		border-top: 1px solid var(--dark-line);
	}

	.top {
		display: grid;
		grid-template-columns: 1.4fr 1fr 1fr;
		gap: 2.5rem;
		padding-block: 3.5rem 2.5rem;
	}

	.logo {
		width: 200px;
		height: auto;
		margin-bottom: 1.25rem;
	}

	.brand-col p {
		max-width: 26rem;
		line-height: 1.7;
	}

	.col {
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		align-items: flex-start;
	}

	.col h3 {
		font-family: var(--font-body);
		font-size: 0.78rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--copper-bright);
		margin-bottom: 0.5rem;
	}

	.col a {
		color: var(--dark-mute);
		text-decoration: none;
		transition: color 0.2s var(--ease);
	}

	.col a:hover {
		color: var(--copper-bright);
	}

	.bottom {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem 2rem;
		justify-content: space-between;
		padding-block: 1.5rem;
		border-top: 1px solid var(--dark-line);
		font-size: 0.85rem;
	}

	@media (max-width: 760px) {
		.top {
			grid-template-columns: 1fr;
			gap: 2rem;
		}
	}
</style>
