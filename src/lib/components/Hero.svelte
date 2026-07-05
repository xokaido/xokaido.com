<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions';

	const t = $derived(i18n.t.hero);
	const bars = [42, 68, 54, 80, 64, 90, 72, 58, 84, 66, 95, 76];
</script>

<section class="hero" id="top">
	<div class="wrap grid">
		<div class="copy">
			<p class="eyebrow">{t.eyebrow}</p>
			<!-- eslint-disable-next-line svelte/no-at-html-tags — trusted, ships from our own dictionary -->
			<h1>{@html t.title}</h1>
			<p class="lede">{t.lede}</p>
			<div class="actions">
				<a class="btn btn-primary" href="#contact">
					{t.cta1}
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
						<path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</a>
				<a class="btn btn-ghost-dark" href="#work">{t.cta2}</a>
			</div>
		</div>

		<div class="visual" aria-hidden="true" use:reveal>
			<div class="glow"></div>
			<div class="browser">
				<div class="chrome">
					<span class="dot"></span><span class="dot"></span><span class="dot"></span>
					<span class="url">xokaido.com</span>
				</div>
				<div class="app">
					<div class="sidebar">
						<span class="s-logo"></span>
						<span class="s-line w70"></span>
						<span class="s-line w55 active"></span>
						<span class="s-line w65"></span>
						<span class="s-line w45"></span>
						<span class="s-line w60"></span>
					</div>
					<div class="main">
						<div class="tiles">
							<div class="tile"><i class="w50"></i><b class="w70"></b></div>
							<div class="tile"><i class="w40"></i><b class="w60"></b></div>
							<div class="tile"><i class="w55"></i><b class="w65"></b></div>
						</div>
						<div class="chart">
							{#each bars as h, idx (idx)}
								<span style="height: {h}%" class:hot={idx === 10}></span>
							{/each}
						</div>
					</div>
				</div>
			</div>

			<div class="phone">
				<div class="notch"></div>
				<div class="screen">
					<div class="bubble left w80"></div>
					<div class="bubble right w60"></div>
					<div class="bubble left w70"></div>
					<div class="typing"><span></span><span></span><span></span></div>
					<div class="input"><i></i></div>
				</div>
			</div>
		</div>
	</div>

	<div class="wrap meta" role="list">
		{#each t.stats as s (s.label)}
			<div role="listitem"><strong>{s.value}</strong><span>{s.label}</span></div>
		{/each}
	</div>
</section>

<style>
	.hero {
		background: var(--dark);
		color: var(--dark-text);
		position: relative;
		overflow: hidden;
		padding-block: 0;
	}

	.hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background:
			radial-gradient(900px 480px at 85% -10%, rgba(217, 142, 79, 0.14), transparent 62%),
			radial-gradient(700px 500px at -8% 110%, rgba(217, 142, 79, 0.08), transparent 60%);
		pointer-events: none;
	}

	.grid {
		position: relative;
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: clamp(2.5rem, 5vw, 5rem);
		align-items: center;
		padding-block: clamp(4.5rem, 8vw, 7.5rem) clamp(3.5rem, 6vw, 5.5rem);
	}

	.eyebrow {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		font-size: 0.8rem;
		font-weight: 600;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--copper-bright);
		margin-bottom: 1.6rem;
	}

	.eyebrow::before {
		content: '';
		width: 26px;
		height: 1px;
		background: var(--copper-bright);
	}

	h1 {
		font-size: clamp(2.4rem, 4.6vw, 3.9rem);
		line-height: 1.08;
		letter-spacing: -0.015em;
	}

	h1 :global(em) {
		font-style: italic;
		color: var(--copper-bright);
	}

	.lede {
		margin-top: 1.6rem;
		font-size: clamp(1.02rem, 1.4vw, 1.16rem);
		color: var(--dark-mute);
		max-width: 36rem;
		line-height: 1.7;
	}

	.actions {
		margin-top: 2.4rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	/* ---------- Visual composition ---------- */
	.visual {
		position: relative;
		min-height: 380px;
	}

	.glow {
		position: absolute;
		inset: 10% 0;
		background: radial-gradient(closest-side, rgba(217, 142, 79, 0.22), transparent 70%);
		filter: blur(10px);
	}

	.browser {
		position: relative;
		background: var(--dark-raise);
		border: 1px solid var(--dark-line);
		border-radius: 14px;
		overflow: hidden;
		box-shadow: 0 40px 80px -30px rgba(0, 0, 0, 0.6);
	}

	.chrome {
		display: flex;
		align-items: center;
		gap: 6px;
		padding: 0.65rem 0.9rem;
		border-bottom: 1px solid var(--dark-line);
	}

	.dot {
		width: 9px;
		height: 9px;
		border-radius: 50%;
		background: var(--dark-line);
	}

	.chrome .dot:first-child {
		background: rgba(217, 142, 79, 0.65);
	}

	.url {
		margin-left: 0.75rem;
		font-size: 0.68rem;
		letter-spacing: 0.06em;
		color: var(--dark-mute);
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid var(--dark-line);
		border-radius: 999px;
		padding: 0.18rem 0.9rem;
	}

	.app {
		display: grid;
		grid-template-columns: 88px 1fr;
	}

	.sidebar {
		border-right: 1px solid var(--dark-line);
		padding: 0.9rem 0.7rem;
		display: flex;
		flex-direction: column;
		gap: 0.65rem;
	}

	.s-logo {
		width: 22px;
		height: 22px;
		border-radius: 7px;
		background: linear-gradient(135deg, var(--copper-bright), var(--copper-deep));
		margin-bottom: 0.5rem;
	}

	.s-line {
		height: 6px;
		border-radius: 3px;
		background: rgba(255, 255, 255, 0.09);
	}

	.s-line.active {
		background: rgba(217, 142, 79, 0.55);
	}

	.main {
		padding: 1rem;
	}

	.tiles {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 0.6rem;
		margin-bottom: 0.9rem;
	}

	.tile {
		border: 1px solid var(--dark-line);
		border-radius: 9px;
		padding: 0.6rem;
		display: flex;
		flex-direction: column;
		gap: 0.45rem;
		background: rgba(255, 255, 255, 0.02);
	}

	.tile i {
		height: 5px;
		border-radius: 3px;
		background: rgba(255, 255, 255, 0.1);
	}

	.tile b {
		height: 9px;
		border-radius: 4px;
		background: linear-gradient(90deg, var(--copper-bright), rgba(217, 142, 79, 0.4));
	}

	.w40 { width: 40%; }
	.w45 { width: 45%; }
	.w50 { width: 50%; }
	.w55 { width: 55%; }
	.w60 { width: 60%; }
	.w65 { width: 65%; }
	.w70 { width: 70%; }
	.w80 { width: 80%; }

	.chart {
		display: flex;
		align-items: flex-end;
		gap: 5.5%;
		height: 120px;
		border: 1px solid var(--dark-line);
		border-radius: 9px;
		padding: 0.8rem;
		background: rgba(255, 255, 255, 0.02);
	}

	.chart span {
		flex: 1;
		border-radius: 3px 3px 1px 1px;
		background: rgba(217, 142, 79, 0.28);
	}

	.chart span.hot {
		background: linear-gradient(180deg, var(--copper-bright), var(--copper-deep));
	}

	/* ---------- Phone ---------- */
	.phone {
		position: absolute;
		right: -14px;
		bottom: -34px;
		width: 168px;
		background: #0e0b09;
		border: 1px solid var(--dark-line);
		border-radius: 26px;
		padding: 9px;
		box-shadow: 0 34px 60px -20px rgba(0, 0, 0, 0.7);
	}

	.notch {
		position: absolute;
		top: 15px;
		left: 50%;
		transform: translateX(-50%);
		width: 52px;
		height: 11px;
		border-radius: 999px;
		background: #000;
		z-index: 1;
	}

	.screen {
		background: var(--dark-raise);
		border-radius: 18px;
		padding: 2rem 0.7rem 0.7rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		min-height: 220px;
	}

	.bubble {
		height: 22px;
		border-radius: 11px;
	}

	.bubble.left {
		background: rgba(255, 255, 255, 0.08);
		border-bottom-left-radius: 4px;
		align-self: flex-start;
	}

	.bubble.right {
		background: linear-gradient(135deg, var(--copper-bright), var(--copper-deep));
		border-bottom-right-radius: 4px;
		align-self: flex-end;
		opacity: 0.9;
	}

	.typing {
		display: flex;
		gap: 4px;
		padding: 0.4rem 0.6rem;
		align-self: flex-start;
	}

	.typing span {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		background: var(--dark-mute);
		animation: blink 1.2s infinite;
	}

	.typing span:nth-child(2) { animation-delay: 0.2s; }
	.typing span:nth-child(3) { animation-delay: 0.4s; }

	@keyframes blink {
		0%, 60%, 100% { opacity: 0.35; }
		30% { opacity: 1; }
	}

	.input {
		margin-top: auto;
		border: 1px solid var(--dark-line);
		border-radius: 999px;
		height: 30px;
		display: flex;
		align-items: center;
		padding-inline: 0.6rem;
	}

	.input i {
		width: 45%;
		height: 5px;
		border-radius: 3px;
		background: rgba(255, 255, 255, 0.1);
	}

	/* ---------- Stats ---------- */
	.meta {
		position: relative;
		border-top: 1px solid var(--dark-line);
		padding-block: 1.6rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem 3.5rem;
	}

	.meta div strong {
		font-family: var(--font-display);
		font-weight: 600;
		font-size: 1.65rem;
		display: block;
		line-height: 1.2;
	}

	.meta div span {
		font-size: 0.86rem;
		color: var(--dark-mute);
	}

	@media (max-width: 1020px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.visual {
			max-width: 560px;
			margin-top: 1rem;
		}

		.phone {
			right: 4px;
		}
	}

	@media (max-width: 480px) {
		.phone {
			display: none;
		}

		.visual {
			min-height: 0;
		}
	}
</style>
