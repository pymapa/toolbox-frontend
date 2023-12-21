<script>
	import { signOut } from '@auth/sveltekit/client';
	import UserDropdown from '$lib/components/UserDropdown.svelte';

	/** @type boolean */
	export let loggedIn;

</script>

<div class="navbar bg-base-900 h-16">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</button>
	</div>
	<div class="flex-1">
		<a href="/" class="btn btn-ghost text-xl">ToolBox</a>
	</div>
	<div class="flex-none">
		<UserDropdown loggedIn={loggedIn} />
	</div>
</div>
