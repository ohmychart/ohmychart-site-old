<script>
	import { base } from '$app/paths';
	import Icon from '$components/Icon.svelte';

	export let postInfo;
</script>

<div class="post-info">
	<Icon name="pixelArrow" size="3rem" class="post-arrow" />
	<div class="post-info-content">
		<p class="post-topic">{postInfo.topic}</p>
		<a href={base + postInfo.url} rel="external" class="highlight"
			><h2 class="post-title">{postInfo.title}</h2></a
		>
	</div>
</div>

<style>
	.post-info {
		display: flex;
		flex-flow: row nowrap;
		padding: 1.5rem;
		align-items: center;
	}

	.post-info-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding-left: 1.5rem;
	}

	@media (max-width: 500px) {
		.post-info-content {
			padding-left: 0.85rem;
		}
	}

	.post-topic {
		font-weight: 400;
		font-size: 1rem;
		color: var(--color-white-primary);
		margin: 0;
		padding: 0 8px;
	}

	@media (max-width: 500px) {
		.post-topic {
			font-size: 0.8rem;
			line-height: 1rem;
		}
	}

	.post-title {
		font-weight: 600;
		font-size: 1.5rem;
		line-height: 1.75rem;
		margin: 0;
	}

	@media (max-width: 500px) {
		.post-title {
			font-size: 1.15rem;
			line-height: 1.25rem;
		}
	}

	a.highlight {
		text-decoration: none;
		color: var(--color-teal-primary);
		background: linear-gradient(
			to bottom,
			var(--color-teal-primary) 0%,
			var(--color-teal-primary) 100%
		);
		background-position: 0 100%;
		background-repeat: repeat-x;
		background-size: 4px 0px;
		transition: background-size 0.2s;
		padding: 0 8px;
	}

	@media (min-width: 500px) {
		a.highlight:hover {
			background-size: 4px 6rem;
			color: var(--color-white-primary);
		}
	}

	:global(.post-arrow) {
		color: var(--color-white-primary);
	}
</style>
