<script lang="ts">
	import { i18n } from '$lib/i18n.svelte';

	const t = $derived(i18n.t.process);
</script>

<section id="process">
	<div class="wrap">
		<div class="head">
			<div>
				<p class="label">{t.kicker}</p>
				<h2>{t.title}</h2>
			</div>
			<p class="sub">{t.sub}</p>
		</div>

		<ol>
			{#each t.steps as step, idx (step.title)}
				<li>
					<!-- How far along the job is at this step -->
					<div class="progress" aria-hidden="true">
						{#each t.steps as _, seg (seg)}
							<i class:done={seg <= idx}></i>
						{/each}
					</div>
					<span class="num">{idx + 1}</span>
					<h3>{step.title}</h3>
					<p>{step.desc}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<style>
	section {
		border-top: 1px solid var(--line);
	}

	.head {
		display: grid;
		grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
		gap: 16px clamp(40px, 7vw, 112px);
		align-items: end;
		margin-bottom: clamp(32px, 5vw, 56px);
	}

	h2 {
		font-size: clamp(30px, 4vw, 48px);
		line-height: 1.12;
	}

	.sub {
		color: var(--ink-soft);
		font-size: 18px;
		line-height: 28px;
	}

	ol {
		list-style: none;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		background: var(--card);
		border: 1px solid var(--line-strong);
		border-radius: var(--r-panel);
		overflow: hidden;
	}

	li {
		padding: 28px 28px 36px;
		border-inline-start: 1px solid var(--line);
	}

	li:first-child {
		border-inline-start: none;
	}

	.progress {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 4px;
		margin-bottom: 40px;
	}

	.progress i {
		height: 3px;
		border-radius: 2px;
		background: var(--line-strong);
	}

	.progress i.done {
		background: var(--accent);
	}

	.num {
		display: block;
		font-family: var(--font-display);
		font-size: 64px;
		line-height: 1;
		font-variant-numeric: lining-nums;
		color: var(--ink);
		margin-bottom: 24px;
	}

	h3 {
		font-size: 26px;
		line-height: 32px;
		margin-bottom: 12px;
	}

	li p {
		color: var(--ink-soft);
		font-size: 16px;
		line-height: 26px;
	}

	@media (max-width: 1040px) {
		.head {
			grid-template-columns: minmax(0, 1fr);
		}

		ol {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}

		li:nth-child(odd) {
			border-inline-start: none;
		}

		li:nth-child(n + 3) {
			border-top: 1px solid var(--line);
		}
	}

	@media (max-width: 560px) {
		ol {
			grid-template-columns: minmax(0, 1fr);
		}

		li {
			padding: 24px;
			border-inline-start: none;
		}

		li + li {
			border-top: 1px solid var(--line);
		}

		.progress {
			margin-bottom: 24px;
		}

		.num {
			font-size: 48px;
			margin-bottom: 16px;
		}
	}
</style>
