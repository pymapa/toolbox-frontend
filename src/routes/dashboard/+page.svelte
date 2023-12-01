<script lang="ts">
	import type { StravaUser } from "$lib/types/StravaUser";

	// import type { StravaUser } from '$lib/types/StravaUser';
	// import { currentUser } from '$lib/auth';
  // layout.server returns stravaUser
  export let stravaUser: StravaUser | null;
	// let user: StravaUser | null ;
  // currentUser.subscribe((value) => {
  //   console.log(value);
  //   user = value;
  // });
</script>

<h1>Dashboard</h1>
<h2>{stravaUser?.stravaAccessToken}</h2>
