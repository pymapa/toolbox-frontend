import { setCurrentUser } from '$lib/auth';
import { getAccessTokenWithCode } from '$lib/client/strava';

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ url, cookies }) => {
	const error = url.searchParams.get('error');
	const code = url.searchParams.get('code');

	if (error || code === null) {
		console.log('Authorization failed, error: ', error);
		return { status: 307, redirect: '/login' };
	}

	try {
		const stravaUser = await getAccessTokenWithCode(code);

		setCurrentUser(stravaUser);

		setCookie('strava_access_token', stravaUser.stravaAccessToken, cookies);
		setCookie('strava_refresh_token', stravaUser.stravaRefreshToken, cookies);

		return { status: 200 };

	} catch (error) {
		console.log('Error while getting access token: ', error);
		return { status: 307, redirect: '/login' };
	}
};

/**
 * @param {string} name - The name of the cookie.
 * @param {string} value - The value of the cookie.
 * @param {import('@sveltejs/kit').Cookies} cookies - The cookies object.
 */
const setCookie = (name, value, cookies) => {
	cookies.set(name, value, {
		path: '/',
		httpOnly: true,
		secure: true,
		sameSite: 'strict',
		expires: new Date(Date.now() + 2592000000)
	});
}

