<script>
	import {
		PUBLIC_STRAVA_CLIENT_ID,
		PUBLIC_STRAVA_REDIRECT_URI,
		PUBLIC_STRAVA_BASE_URL
	} from '$env/static/public';

	const authPath = '/oauth/authorize';
	const queryParams = {
		client_id: PUBLIC_STRAVA_CLIENT_ID,
		response_type: 'code',
		redirect_uri: PUBLIC_STRAVA_REDIRECT_URI,
		scope: 'read,activity:read,activity:read_all'
	};
	const query = new URLSearchParams(queryParams);

	const handleStravaConnect = () => {
		window.location.href = `${PUBLIC_STRAVA_BASE_URL}${authPath}?${query}`;
	};
</script>

<div>
	<button class="btn btn-primary" on:click={handleStravaConnect}>Connect strava</button>
</div>
