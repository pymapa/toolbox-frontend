
/** @type {import("./$types").LayoutServerLoad} */
export const load = async ({ cookies }) => {
  const accessToken = cookies.get('strava_access_token');
  const refreshToken = cookies.get('strava_refresh_token');
  const loggedIn = !!(accessToken && refreshToken);
  return {
    loggedIn
  };
}