<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
</script>

<div class="flex flex-wrap h-screen">

	<Nav />
	<slot />
</div>
