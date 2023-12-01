<script> 
  import { page } from "$app/stores";
  import Icon from "svelte-icons-pack/Icon.svelte";
  import RiBuildingsHomeGearFill from "svelte-icons-pack/ri/RiBuildingsHomeGearFill";
  import HiOutlineMenuAlt2 from "svelte-icons-pack/hi/HiOutlineMenuAlt2";
  import BiLogIn from "svelte-icons-pack/bi/BiLogIn";
  import BiLogOut from "svelte-icons-pack/bi/BiLogOut";
	import { signOut } from "@auth/sveltekit/client";

  const handleLogout = () => {
    signOut();
  }
</script>

<div class="flex h-12 w-full justify-between">
  <div>
    <a href="/"><Icon src={RiBuildingsHomeGearFill} size="2rem" color={'rgb(224 242 254'} /></a>
  </div>

  {#if $page.data.session}
    <button on:click={handleLogout}>
      <Icon src={BiLogOut} size="2rem" color="rgb(224 242 254" />
    </button>
  {/if}

  {#if !$page.data.session}
  <a href="/login">
    <Icon src={BiLogIn} size="2rem" color='rgb(224 242 254' />
  </a>
  {/if}
  
  <!-- <button>
    <Icon src={HiOutlineMenuAlt2} size="2rem" color={'rgb(224 242 254'} />
  </button> -->
</div>