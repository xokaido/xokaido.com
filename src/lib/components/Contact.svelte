<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';
	import { projects } from '$lib/projects';

	const t = $derived(i18n.t.cta);
	const next = String(projects.length + 1).padStart(2, '0');
</script>

<section id="contact">
	<div class="wrap grid">
		<div>
			<p class="label">{t.kicker}</p>
			<h2>{t.title}</h2>
			<p class="sub">{t.sub}</p>
			<div class="actions">
				<a class="btn btn-primary" href="mailto:hello@xokaido.com?subject=Project%20inquiry">{t.button}</a>
				<span class="mail">{t.mailLabel} <a href="mailto:hello@xokaido.com">hello@xokaido.com</a></span>
			</div>
		</div>

		<!-- The register's next line, left open -->
		<a class="blank" href="mailto:hello@xokaido.com?subject=Project%20inquiry">
			<span class="no">№ {next}</span>
			<span class="name">{t.entry}</span>
			<span class="rule" aria-hidden="true"></span>
			<span class="note">{t.entryNote}</span>
		</a>
	</div>
</section>

<style>
	section {
		border-top: 1px solid var(--line);
	}

	.grid {
		display: grid;
		grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
		gap: 40px clamp(40px, 7vw, 112px);
		align-items: center;
	}

	h2 {
		font-size: clamp(32px, 4.4vw, 56px);
		line-height: 1.08;
		letter-spacing: -0.025em;
	}

	:global(:lang(ka)) h2 {
		font-size: clamp(28px, 3.6vw, 44px);
		line-height: 1.2;
	}

	.sub {
		margin-top: 20px;
		color: var(--ink-soft);
		font-size: 18px;
		line-height: 28px;
		max-width: 520px;
	}

	.actions {
		margin-top: 32px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 16px 24px;
	}

	.mail {
		font-size: 15px;
		color: var(--ink-mute);
	}

	.mail a {
		color: var(--ink);
		text-decoration-color: var(--line-strong);
		text-underline-offset: 4px;
		transition: text-decoration-color 0.15s var(--ease);
	}

	.mail a:hover {
		text-decoration-color: var(--accent);
	}

	.blank {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: 4px 16px;
		align-items: baseline;
		padding: 24px;
		border: 1px dashed var(--line-strong);
		border-radius: var(--r-card);
		text-decoration: none;
		transition: border-color 0.15s var(--ease);
	}

	.blank:hover {
		border-color: var(--accent);
	}

	.blank .name {
		font-family: var(--font-display);
		font-size: 24px;
		line-height: 32px;
	}

	.blank .rule {
		grid-column: 2;
		height: 1px;
		background: var(--line-strong);
		margin-block: 12px 8px;
	}

	.blank .note {
		grid-column: 2;
		font-size: 13px;
		line-height: 20px;
		color: var(--ink-mute);
	}

	@media (max-width: 960px) {
		.grid {
			grid-template-columns: minmax(0, 1fr);
		}
	}
</style>
