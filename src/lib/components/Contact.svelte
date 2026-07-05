<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { reveal } from '$lib/actions';

	const t = $derived(i18n.t.cta);
</script>

<section id="contact" class="cta">
	<div class="wrap inner" use:reveal>
		<p class="eyebrow">{t.kicker}</p>
		<h2>{t.title}</h2>
		<p class="sub">{t.sub}</p>
		<div class="actions">
			<a class="btn btn-primary" href="mailto:hello@xokaido.com?subject=Project%20inquiry">
				{t.button}
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
					<path d="M2 8h11M9 3.5 13.5 8 9 12.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</a>
		</div>
		<p class="mail">
			{t.mailLabel} <a href="mailto:hello@xokaido.com">hello@xokaido.com</a>
		</p>
	</div>
</section>

<style>
	.cta {
		background: var(--dark);
		color: var(--dark-text);
		position: relative;
		overflow: hidden;
	}

	.cta::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(760px 420px at 50% 130%, rgba(217, 142, 79, 0.18), transparent 65%);
		pointer-events: none;
	}

	.inner {
		position: relative;
		text-align: center;
		max-width: 44rem;
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
		margin-bottom: 1.4rem;
	}

	.eyebrow::before,
	.eyebrow::after {
		content: '';
		width: 26px;
		height: 1px;
		background: var(--copper-bright);
	}

	h2 {
		font-size: clamp(2.1rem, 4.4vw, 3.2rem);
	}

	.sub {
		margin-top: 1.25rem;
		color: var(--dark-mute);
		font-size: 1.08rem;
	}

	.actions {
		margin-top: 2.4rem;
		display: flex;
		justify-content: center;
	}

	.mail {
		margin-top: 1.75rem;
		font-size: 0.95rem;
		color: var(--dark-mute);
	}

	.mail a {
		color: var(--copper-bright);
		text-decoration: none;
		font-weight: 500;
	}

	.mail a:hover {
		text-decoration: underline;
	}
</style>
