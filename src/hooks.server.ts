import { SvelteKitAuth } from '@auth/sveltekit';
import StravaProvider from '@auth/core/providers/strava';
import {
  STRAVA_CLIENT_ID,
  STRAVA_CLIENT_SECRET,
} from '$env/static/private';

export const handle = SvelteKitAuth({
  providers: [
    StravaProvider({
      clientId: STRAVA_CLIENT_ID,
      clientSecret: STRAVA_CLIENT_SECRET,
    }),
  ],
});