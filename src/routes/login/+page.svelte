<script>
  import { page } from "$app/stores";
  import { signIn } from "@auth/sveltekit/client";

  const handleStravaLogin = () => {
    signIn('strava', {callbackUrl: '/auth'})
  };
</script>

<div>
  {#if !$page.data.session}
    <button on:click={handleStravaLogin}>Log in with Strava</button>
  {/if}

  {#if $page.data.session}
    <p>logged in</p>
  {/if}
</div>