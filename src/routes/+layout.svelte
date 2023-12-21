<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';

	/** @type {import('./$types').LayoutData} */
	export let data;
	console.log(data);
</script>

<div class="flex flex-wrap h-screen">

	<Nav loggedIn={data.loggedIn} />
	<slot />
</div>
