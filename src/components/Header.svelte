<script>
	import { base } from '$app/paths';
	import SideMenu from '$components/SideMenu.svelte';
	import Icon from '$components/Icon.svelte';

	export let sideMenu = false;
</script>

<header>
	<div id="main-header">
		<div id="main-logo" />

		<a href="{base}/" on:click={() => (sideMenu = !sideMenu)}>
			<Icon name="menu" size="2.5rem" id="openMenu" />
		</a>
	</div>
	<SideMenu bind:open={sideMenu} />
	<div id="main-header-border" />
</header>

<style>
	#main-header {
		background-color: var(--color-teal-primary);
		height: var(main-header-height);
		padding: var(--main-header-padding);
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	#main-header-border {
		height: var(--main-header-border-height);
		background-image: url('/assets/img/pixel-texture.png');
	}

	#main-logo {
		background-image: url('/assets/img/logo.png');
		background-repeat: no-repeat;
		width: 231px;
		height: 21px;
	}

	:global(#openMenu) {
		stroke: var(--color-white-primary);
		background-color: var(--color-dark-primary);
		transition: all 0.4s ease-in-out;
	}

	:global(#openMenu:hover) {
		stroke: var(--color-teal-primary);
		background-color: var(--color-white-primary);
		transform: scale(1.1);
	}
</style>
