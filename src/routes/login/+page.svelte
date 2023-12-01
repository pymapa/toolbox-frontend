<script>
  import { page } from "$app/stores";
	import ConnectStrava from "$lib/components/ConnectStrava.svelte";
</script>

<div>
  {#if !$page.data.session}
    <ConnectStrava />
  {/if}

  {#if $page.data.session}
    <p>Already logged in</p>
  {/if}
</div>