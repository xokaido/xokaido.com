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

{#snippet langSwitch()}
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
{/snippet}

<svelte:window onscroll={onScroll} />

<header class:scrolled>
	<div class="wrap inner">
		<a class="brand" href="#top" onclick={close} aria-label="Xokaido Technologies — home">
			<img src="/images/logo-mark.png" alt="" width="36" height="28" />
			<span>Xokaido</span>
		</a>

		<nav id="primary-nav" class="primary" class:open aria-label="Primary">
			<a href="#services" onclick={close}>{nav.services}</a>
			<a href="#work" onclick={close}>{nav.work}</a>
			<a href="#founder" onclick={close}>{nav.about}</a>
			<a href="#process" onclick={close}>{nav.process}</a>
			<div class="mobile-only">
				{@render langSwitch()}
				<a class="btn btn-primary" href="#contact" onclick={close}>{nav.contact}</a>
			</div>
		</nav>

		<div class="controls">
			<div class="desktop-only">{@render langSwitch()}</div>

			<button
				class="icon-btn"
				onclick={() => theme.toggle()}
				aria-label={theme.value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				{#if theme.value === 'dark'}
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
						<circle cx="12" cy="12" r="4" />
						<path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
					</svg>
				{:else}
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z" />
					</svg>
				{/if}
			</button>

			<a class="btn btn-primary btn-sm desktop-only" href="#contact">{nav.contact}</a>

			<button
				class="icon-btn menu-btn"
				aria-expanded={open}
				aria-controls="primary-nav"
				aria-label="Toggle menu"
				onclick={() => (open = !open)}
			>
				<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true">
					{#if open}
						<path d="M6 6l12 12M18 6 6 18" />
					{:else}
						<path d="M4 7h16M4 12h16M4 17h16" />
					{/if}
				</svg>
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
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		border-bottom: 1px solid transparent;
		transition: border-color 0.2s var(--ease);
	}

	header.scrolled {
		border-bottom-color: var(--line);
	}

	.inner {
		display: flex;
		align-items: center;
		height: 64px;
		gap: 32px;
	}

	.brand {
		display: flex;
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

	nav.primary {
		display: flex;
		align-items: center;
		gap: 28px;
		margin-inline-end: auto;
	}

	nav.primary > a {
		text-decoration: none;
		font-size: 15px;
		color: var(--ink-soft);
		transition: color 0.15s var(--ease);
	}

	nav.primary > a:hover {
		color: var(--ink);
	}

	.controls {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.langs {
		display: flex;
		gap: 4px;
	}

	.langs button {
		border: none;
		background: none;
		height: 32px;
		padding-inline: 8px;
		border-radius: 6px;
		font-size: 14px;
		cursor: pointer;
		color: var(--ink-mute);
		transition:
			background-color 0.15s var(--ease),
			color 0.15s var(--ease);
	}

	.langs button:hover {
		color: var(--ink);
	}

	.langs button.active {
		background: var(--raise);
		color: var(--ink);
	}

	.icon-btn {
		display: grid;
		place-items: center;
		width: 36px;
		height: 36px;
		border-radius: var(--r-control);
		border: none;
		background: none;
		cursor: pointer;
		color: var(--ink-soft);
		transition:
			background-color 0.15s var(--ease),
			color 0.15s var(--ease);
	}

	.icon-btn:hover {
		background: var(--raise);
		color: var(--ink);
	}

	.menu-btn,
	.mobile-only {
		display: none;
	}

	@media (max-width: 960px) {
		.inner {
			justify-content: space-between;
		}

		.menu-btn {
			display: grid;
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
			padding: 8px 24px 24px;
			display: none;
		}

		nav.primary.open {
			display: flex;
			animation: menu-in 0.2s var(--ease);
		}

		nav.primary > a {
			padding-block: 12px;
			font-size: 17px;
			color: var(--ink);
			border-bottom: 1px solid var(--line);
		}

		.mobile-only {
			display: flex;
			flex-direction: column;
			gap: 16px;
			margin-top: 16px;
		}
	}

	@keyframes menu-in {
		from {
			opacity: 0;
			transform: translateY(-6px);
		}
	}
</style>
