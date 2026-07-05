<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { theme } from '$lib/theme.svelte';
	import type { Locale } from '$lib/translations';

	let open = $state(false);
	let scrolled = $state(false);

	const nav = $derived(i18n.t.nav);
	const langs: { code: Locale; label: string; name: string }[] = [
		{ code: 'ka', label: 'ქარ', name: 'ქართული' },
		{ code: 'ru', label: 'Рус', name: 'Русский' },
		{ code: 'en', label: 'Eng', name: 'English' }
	];

	function onScroll() {
		scrolled = window.scrollY > 8;
	}

	function close() {
		open = false;
	}
</script>

<svelte:window onscroll={onScroll} />

<header class:scrolled>
	<div class="wrap inner">
		<a class="brand" href="#top" onclick={close} aria-label="Xokaido Technologies — home">
			<img src="/images/logo-mark.png" alt="" width="44" height="34" />
			<span class="brand-text">
				Xokaido
				<small>Technologies LLC</small>
			</span>
		</a>

		<nav class="primary" class:open aria-label="Primary">
			<a href="#services" onclick={close}>{nav.services}</a>
			<a href="#work" onclick={close}>{nav.work}</a>
			<a href="#founder" onclick={close}>{nav.about}</a>
			<a href="#process" onclick={close}>{nav.process}</a>
			<a class="cta btn btn-primary" href="#contact" onclick={close}>{nav.contact}</a>

			<div class="mobile-controls">
				<div class="langs" role="group" aria-label="Language">
					{#each langs as l (l.code)}
						<button
							class:active={i18n.locale === l.code}
							onclick={() => i18n.set(l.code)}
							aria-label={l.name}
							aria-pressed={i18n.locale === l.code}>{l.label}</button
						>
					{/each}
				</div>
			</div>
		</nav>

		<div class="controls">
			<div class="langs desktop-only" role="group" aria-label="Language">
				{#each langs as l (l.code)}
					<button
						class:active={i18n.locale === l.code}
						onclick={() => i18n.set(l.code)}
						aria-label={l.name}
						aria-pressed={i18n.locale === l.code}>{l.label}</button
					>
				{/each}
			</div>

			<button
				class="theme-btn"
				onclick={() => theme.toggle()}
				aria-label={theme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				{#if theme.value === 'dark'}
					<!-- sun -->
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true">
						<circle cx="12" cy="12" r="4.5" />
						<path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.2 5.2l1.7 1.7M17.1 17.1l1.7 1.7M18.8 5.2l-1.7 1.7M6.9 17.1l-1.7 1.7" />
					</svg>
				{:else}
					<!-- moon -->
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
					</svg>
				{/if}
			</button>

			<button
				class="menu-btn"
				aria-expanded={open}
				aria-controls="primary-nav"
				aria-label="Toggle menu"
				onclick={() => (open = !open)}
			>
				<span></span><span></span><span></span>
			</button>
		</div>
	</div>
</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 50;
		background: var(--header-bg);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		border-bottom: 1px solid transparent;
		transition:
			border-color 0.3s var(--ease),
			background-color 0.35s var(--ease),
			box-shadow 0.3s var(--ease);
	}

	header.scrolled {
		border-bottom-color: var(--line);
		box-shadow: 0 8px 30px -18px var(--shadow-color);
	}

	.inner {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-block: 0.95rem;
		gap: 1rem;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		text-decoration: none;
		font-weight: 600;
		letter-spacing: 0.02em;
		font-size: 1.02rem;
	}

	.brand img {
		width: 44px;
		height: auto;
	}

	.brand-text {
		line-height: 1.25;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	.brand-text small {
		display: block;
		font-weight: 500;
		font-size: 0.62rem;
		color: var(--ink-mute);
		letter-spacing: 0.14em;
	}

	nav.primary {
		display: flex;
		align-items: center;
		gap: 1.9rem;
	}

	nav.primary a {
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--ink-soft);
		transition: color 0.2s var(--ease);
	}

	nav.primary a:hover {
		color: var(--accent);
	}

	nav.primary a.cta {
		color: #fff;
		font-size: 0.92rem;
		padding: 0.6rem 1.3rem;
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	.langs {
		display: inline-flex;
		border: 1px solid var(--line);
		border-radius: 999px;
		padding: 0.2rem;
		background: var(--bg-raise);
	}

	.langs button {
		border: none;
		background: none;
		font-size: 0.8rem;
		font-weight: 600;
		padding: 0.32rem 0.7rem;
		border-radius: 999px;
		cursor: pointer;
		color: var(--ink-mute);
		transition:
			background 0.2s var(--ease),
			color 0.2s var(--ease);
	}

	.langs button:hover {
		color: var(--ink);
	}

	.langs button.active {
		background: var(--ink);
		color: var(--bg);
	}

	.theme-btn {
		display: grid;
		place-items: center;
		width: 40px;
		height: 40px;
		border-radius: 999px;
		border: 1px solid var(--line);
		background: var(--bg-raise);
		cursor: pointer;
		color: var(--ink-soft);
		transition:
			border-color 0.2s var(--ease),
			color 0.2s var(--ease),
			transform 0.2s var(--ease);
	}

	.theme-btn:hover {
		border-color: var(--accent);
		color: var(--accent);
		transform: rotate(15deg);
	}

	.menu-btn {
		display: none;
		background: var(--bg-raise);
		border: 1px solid var(--line);
		border-radius: 10px;
		width: 40px;
		height: 40px;
		cursor: pointer;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 5px;
	}

	.menu-btn span {
		display: block;
		width: 17px;
		height: 2px;
		background: var(--ink);
		border-radius: 2px;
		transition:
			transform 0.25s var(--ease),
			opacity 0.25s var(--ease);
	}

	.menu-btn[aria-expanded='true'] span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}

	.menu-btn[aria-expanded='true'] span:nth-child(2) {
		opacity: 0;
	}

	.menu-btn[aria-expanded='true'] span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	.mobile-controls {
		display: none;
	}

	@media (max-width: 900px) {
		.menu-btn {
			display: flex;
		}

		.desktop-only {
			display: none;
		}

		nav.primary {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			background: var(--bg);
			border-bottom: 1px solid var(--line);
			flex-direction: column;
			align-items: stretch;
			gap: 0;
			padding: 0.75rem 1.25rem 1.5rem;
			display: none;
			box-shadow: 0 30px 40px -30px var(--shadow-color);
		}

		nav.primary.open {
			display: flex;
		}

		nav.primary a {
			padding: 0.85rem 0.25rem;
			font-size: 1.05rem;
		}

		nav.primary a.cta {
			text-align: center;
			margin-top: 0.6rem;
		}

		.mobile-controls {
			display: flex;
			justify-content: center;
			margin-top: 1rem;
		}
	}
</style>
