<script>
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
	import Loader from "$lib/components/Loader.svelte";

  onMount(() => {
    goto("/dashboard");
  });
</script>

<Loader message="Redirecting..." />
