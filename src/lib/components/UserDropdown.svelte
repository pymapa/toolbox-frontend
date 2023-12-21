<script>
	import { goto } from '$app/navigation';

	/** @type boolean */
	export let loggedIn;

	const handleLogout = async () => {
		await fetch('/api/logout', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		goto('/');
	};

	const handleLogin = () => {
		goto('/login');
	};

</script>

<div class="dropdown">
	<div tabindex="0" role="button" class="btn btn-square btn-ghost">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			class="inline-block w-5 h-5 stroke-current"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
			/></svg
		>
	</div>
  <ul class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
		{#if !loggedIn}
			<a href="#" on:click={handleLogin}>
				Login
			</a>
		{:else}
			<a href="#" on:click={handleLogout}>
				Logout
			</a>
		{/if}
  </ul>
</div>
