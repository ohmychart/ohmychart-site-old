<script>
	import logo from '$svg/logo.svg';
</script>

<footer>
	<div class="logo">{@html logo}</div>
</footer>

<style>
	footer {
		width: 100%;
		color: var(--color-white-primary);
		background-color: var(--color-dark-primary);
		text-align: center;
        border-top: 2px solid var(--color-teal-primary);
		padding: 1.5rem;
	}

	.logo {
		width: 32px;
		height: 32px;
		padding: 4px;
		margin: 0 auto;
		fill: var(--color-teal-primary);
	}
</style>
