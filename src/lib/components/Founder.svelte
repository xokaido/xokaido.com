<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const t = $derived(i18n.t.founder);
</script>

<section id="founder">
	<div class="wrap grid">
		<figure>
			<img
				src="/images/xokaido-portrait.jpg"
				srcset="/images/xokaido-portrait-sm.jpg 640w, /images/xokaido-portrait.jpg 1200w"
				sizes="(max-width: 960px) 92vw, 480px"
				alt="Portrait of Xokaido, founder of Xokaido Technologies LLC"
				loading="lazy"
				width="1200"
				height="1055"
			/>
			<figcaption>
				<strong>{t.name}</strong>
				<span>{t.role}</span>
			</figcaption>
		</figure>

		<div class="body">
			<p class="label">{t.kicker}</p>
			<h2>{t.title}</h2>
			<p>{t.p1}</p>
			<p>{t.p2}</p>
			<blockquote>{t.quote}</blockquote>
		</div>
	</div>
</section>

<style>
	section {
		border-top: 1px solid var(--line);
	}

	.grid {
		display: grid;
		grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
		gap: 40px clamp(40px, 7vw, 112px);
		align-items: center;
	}

	figure img {
		width: 100%;
		height: auto;
		border-radius: var(--r-card);
	}

	figcaption {
		margin-top: 12px;
		display: flex;
		flex-wrap: wrap;
		gap: 0 12px;
		font-size: 14px;
		line-height: 20px;
	}

	figcaption strong {
		font-weight: 500;
	}

	figcaption span {
		color: var(--ink-mute);
	}

	h2 {
		margin-bottom: 24px;
	}

	.body > p:not(.label) {
		color: var(--ink-soft);
		font-size: 17px;
		line-height: 28px;
		max-width: 600px;
	}

	.body > p + p {
		margin-top: 16px;
	}

	blockquote {
		margin-top: 32px;
		padding-inline-start: 20px;
		border-inline-start: 2px solid var(--accent);
		font-family: var(--font-display);
		font-size: clamp(20px, 2vw, 24px);
		line-height: 1.4;
		max-width: 600px;
	}

	@media (max-width: 960px) {
		.grid {
			grid-template-columns: minmax(0, 1fr);
		}

		figure {
			max-width: 480px;
		}
	}
</style>
