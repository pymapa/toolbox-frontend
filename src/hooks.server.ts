import { SvelteKitAuth } from '@auth/sveltekit';
import StravaProvider from '@auth/core/providers/strava';
import { PUBLIC_STRAVA_CLIENT_ID } from '$env/static/public';
import {
  STRAVA_CLIENT_SECRET,
} from '$env/static/private';

export const handle = SvelteKitAuth({
  providers: [
    StravaProvider({
      clientId: PUBLIC_STRAVA_CLIENT_ID,
      clientSecret: STRAVA_CLIENT_SECRET,
    }),
  ],
});