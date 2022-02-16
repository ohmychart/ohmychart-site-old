<script>
	import '$styles/app.css';
	import { base } from '$app/paths';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<svelte:head>
	<title>OhMyChart! — Инфографика</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="description" content="" />
	<meta name="author" content="Ohmychart.com" />
	<link rel="apple-touch-icon" sizes="180x180" href="{base}/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="{base}/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="{base}/favicon-16x16.png" />
	<link rel="manifest" href="{base}/site.webmanifest" />
</svelte:head>

<Header />
<slot />
<Footer />
