<script>
	import '../app.postcss';
	import Nav from './Nav.svelte';
</script>

<div class="flex flex-wrap h-screen bg-slate-900 font-mono text-sky-100 p-10">

	<Nav />
	<slot />
</div>
