<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions';

	const t = $derived(i18n.t.founder);
</script>

<section id="founder">
	<div class="wrap grid">
		<div class="photo" use:reveal>
			<img
				src="/images/xokaido-portrait.jpg"
				srcset="/images/xokaido-portrait-sm.jpg 640w, /images/xokaido-portrait.jpg 1200w"
				sizes="(max-width: 880px) 90vw, 440px"
				alt="Portrait of Xokaido, founder of Xokaido Technologies LLC"
				loading="lazy"
				width="1200"
				height="1055"
			/>
		</div>
		<div class="body" use:reveal={120}>
			<p class="kicker">{t.kicker}</p>
			<h2>{t.title}</h2>
			<p>{t.p1}</p>
			<p>{t.p2}</p>
			<blockquote>{t.quote}</blockquote>
			<div class="sign">
				<strong>{t.name}</strong>
				<span>{t.role}</span>
			</div>
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: minmax(300px, 430px) 1fr;
		gap: clamp(2.5rem, 6vw, 5.5rem);
		align-items: center;
	}

	.photo {
		position: relative;
		border-radius: calc(var(--radius) + 6px);
		overflow: hidden;
		box-shadow: 0 40px 80px -36px var(--shadow-color);
	}

	.photo::after {
		content: '';
		position: absolute;
		inset: 0;
		border-radius: inherit;
		border: 1px solid var(--line);
		pointer-events: none;
	}

	.photo img {
		width: 100%;
		height: auto;
		aspect-ratio: 1338 / 1176;
		object-fit: cover;
	}

	h2 {
		margin-bottom: 1.25rem;
	}

	.body > p:not(.kicker) {
		color: var(--ink-soft);
		margin-bottom: 1.1rem;
		max-width: 36rem;
	}

	blockquote {
		margin: 1.9rem 0 2.1rem;
		padding-left: 1.4rem;
		border-left: 3px solid var(--copper);
		font-family: var(--font-display);
		font-style: italic;
		font-size: 1.22rem;
		line-height: 1.5;
		max-width: 32rem;
	}

	blockquote:lang(ka) {
		font-style: normal;
	}

	.sign strong {
		display: block;
		font-size: 1.05rem;
	}

	.sign span {
		color: var(--ink-mute);
		font-size: 0.9rem;
	}

	@media (max-width: 880px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.photo {
			max-width: 420px;
		}
	}
</style>
