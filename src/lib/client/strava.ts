import { STRAVA_CLIENT_SECRET } from "$env/static/private";
import { PUBLIC_STRAVA_BASE_URL, PUBLIC_STRAVA_CLIENT_ID } from "$env/static/public"
import type { StravaUser } from "$lib/types";

export const getStravaUser = async (authorizationCode: string): Promise<StravaUser> => {
  const body = JSON.stringify({
    client_id: PUBLIC_STRAVA_CLIENT_ID,
    client_secret: STRAVA_CLIENT_SECRET,
    code: authorizationCode,
    grant_type: 'authorization_code'
  });
  const res = await fetch(`${PUBLIC_STRAVA_BASE_URL}/api/v3/oauth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  });
  const resJson = await res.json();

  const stravaUser: StravaUser = {
    stravaAccessToken: resJson.access_token,
    stravaRefreshToken: resJson.refresh_token,
    stravaExpiresAt: resJson.expires_at,
    stravaExpiresIn: resJson.expires_in,
    stravaAthleteId: resJson.athlete.id,
    profileImage: {
      medium: resJson.athlete.profile_medium,
      large: resJson.athlete.profile
    }
  };
  return stravaUser;
}