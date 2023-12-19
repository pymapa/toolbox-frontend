<script>
	import { redirect } from '@sveltejs/kit';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	/** @type {import('./$types').PageData} */
	export let data;

	const user = writable();
	$: user.set(data.stravaUser);

	setContext('user', user);

  // throw redirect(307, '/dashboard');
</script>