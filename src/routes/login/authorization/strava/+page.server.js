import { redirect } from '@sveltejs/kit';
import { setCurrentUser } from '$lib/auth';
import { getStravaUser } from '$lib/client/strava';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, cookies }) => {
	const error = url.searchParams.get('error');
	const code = url.searchParams.get('code');

	if (error || code === null) {
		console.log('Authorization failed, error: ', error);
		throw redirect(307, '/login');
	}

	try {
		const stravaUser = await getStravaUser(code);

    setCurrentUser(stravaUser);
    
		setCookie('strava_access_token', stravaUser.stravaAccessToken, cookies);
		setCookie('strava_refresh_token', stravaUser.stravaRefreshToken, cookies);

    throw redirect(307, '/dashboard');

	} catch (error) {
		throw redirect(307, '/login');
	}
};

/**
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {import('@sveltejs/kit').Cookies} cookies - The cookies object.
 */
const setCookie = (name, value, cookies ) => {
	cookies.set(name, value, {
		path: '/',
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
		expires: new Date(Date.now() + 2592000000)
	});
}
	
