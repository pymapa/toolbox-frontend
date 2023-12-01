import { redirect } from "@sveltejs/kit";
import { currentUser } from "$lib/auth";
import type { StravaUser } from "$lib/types/StravaUser.js";

export const load = async (event) => {
  console.log('event', event);
  let stravaUser: StravaUser | null = null;

  if (!currentUser.subscribe(user => {
    if (!user) {
      throw redirect(307, '/login');
    }
    stravaUser = user;
    console.log('stravaUser', stravaUser);
  }))
  
  console.log('user', stravaUser);

  return {
    stravaUser
  }
}