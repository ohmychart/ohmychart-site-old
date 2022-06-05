<script>
	import logo from '$svg/logo-sm.svg';
</script>

<footer>
	<div class="logo">{@html logo}</div>
</footer>

<style>
	footer {
		width: 100%;
		color: var(--color-white-primary);
		text-align: center;
        border-top: 2px solid var(--color-teal-primary);
	}

	.logo {
		width: 64px;
		height: 64px;
		padding: 8px;
		margin: 0 auto;
		fill: var(--color-teal-primary);
	}
</style>
