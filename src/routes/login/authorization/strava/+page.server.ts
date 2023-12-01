import { PUBLIC_STRAVA_BASE_URL, PUBLIC_STRAVA_CLIENT_ID } from '$env/static/public';
import { STRAVA_CLIENT_SECRET } from '$env/static/private';
import { redirect } from '@sveltejs/kit';
import type { StravaUser } from '$lib/types/StravaUser.js';
import { currentUser } from '$lib/auth.js';

export const load = async (event) => {
  const { url, cookies } = event;
  const error = url.searchParams.get('error');
  const code = url.searchParams.get('code');
  const scope = url.searchParams.get('scope');

  const returnToLogin = () => {
    throw redirect(307, '/login');
  }

  if (error) {
    console.log('Authorization failed, error: ', error);
    returnToLogin();
  }

  console.log('Authorization success, code: ', code, ' scope: ', scope);

  try {
    const body = JSON.stringify({
      client_id: PUBLIC_STRAVA_CLIENT_ID,
      client_secret: STRAVA_CLIENT_SECRET,
      code,
      grant_type: 'authorization_code',
    })

    const response = await fetch(`${PUBLIC_STRAVA_BASE_URL}/api/v3/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body
    });
    const resJson = await response.json();
    console.log('Strava responded with status', response.status);
    console.log('Strava response', resJson);
    if (response.status !== 200) {
      returnToLogin();
    }
    currentUser.set({
      stravaAccessToken: resJson.access_token,
      stravaRefreshToken: resJson.refresh_token,
      stravaExpiresAt: resJson.expires_at,
      stravaExpiresIn: resJson.expires_in,
      stravaAthleteId: resJson.athlete.id,
      profileImage: {
        medium: resJson.athlete.profile_medium,
        large: resJson.athlete.profile
      }
    });
    console.log('user', currentUser);
    cookies.set('strava_access_token', resJson.access_token, {
      httpOnly: false,
      secure: true,
      sameSite: 'strict',
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
    });

  } catch (error) {
    console.log('error', error);
    returnToLogin();
  }

  throw redirect(302, '/dashboard');
} 
