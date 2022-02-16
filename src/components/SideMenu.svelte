<script>
	import { base } from '$app/paths';
	import Icon from '$components/Icon.svelte';
	export let open = false;
</script>

<aside class:open>
	<section>
		<h2>Про этот сайт</h2>
		<p>
			Привет, меня зовут Дмитрий и на этом сайте я публикую свои визуализации и инфографику на
			экономические, исторические и социальные темы.
		</p>
	</section>
	<section>
		<h2>Для связи</h2>
		<p><a href="mailto:dmitrii@ohmychart.com" class="highlight">dmitrii@ohmychart.com</a></p>
		<p><a href="https://twitter.com/ohmychart" class="highlight">Twitter</a></p>
	</section>
	<a href="{base}/" on:click={() => (open = !open)} id="closeMenuLink">
		<Icon name="x" size="2.5rem" id="closeMenuIcon" />
	</a>
</aside>

<style>
	aside {
		position: fixed;
		top: 0;
		right: 0;
		height: 100%;
		width: calc(var(--main-column-width) * 0.8);
		max-width: 100vw;
		z-index: 999;
		background-color: var(--color-teal-primary);

		transition: transform 0.3s ease-in-out;
		transform: translate(100%, 0);
	}

	section {
		padding: var(--main-header-padding);
	}

	h2 {
		font-weight: 600;
		font-size: 1.5rem;
		line-height: 1.75rem;
		margin: 1rem 0 0 0;
		color: var(--color-dark-primary);
	}

	p {
		font-family: 'IBM Plex Sans', serif;
		font-size: 1.15rem;
		line-height: 1.5rem;
		color: var(--color-white-primary);
	}

	a {
		text-decoration: none;
	}

	.highlight {
		background: linear-gradient(
			120deg,
			var(--color-dark-primary) 0%,
			var(--color-dark-primary) 100%
		);
		background-repeat: no-repeat;
		background-size: 100% 30%;
		background-position: 0 95%;
		color: var(--color-white-primary);
		font-weight: 500;
		padding: 2px 0px;
		transition: all 0.2s ease-in-out;
	}
	.highlight:hover {
		background-size: 100% 100%;
		color: var(--color-teal-primary);
	}

	#closeMenuLink {
		position: absolute;
		top: 0;
		right: 0;
		height: 2.5rem;
		padding: 16px;
	}

	.open {
		transform: translate(0, 0);
	}

	:global(#closeMenuIcon) {
		stroke: var(--color-white-primary);
		background-color: var(--color-dark-primary);
		transition: all 0.4s ease-in-out;
	}

	:global(#closeMenuIcon:hover) {
		stroke: var(--color-teal-primary);
		background-color: var(--color-white-primary);
		transform: scale(1.1);
	}
</style>
