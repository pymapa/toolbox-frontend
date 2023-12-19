import { writable, type Writable } from "svelte/store"
import type { StravaUser } from "./types"

export const currentUser: Writable<StravaUser | null> = writable(null);

export const setCurrentUser = (user: StravaUser) => {
  
  currentUser.set(user);
}

export const clearCurrentUser = () => {
  currentUser.set(null);
}

export const getCurrentUser = () => {
  return currentUser;
}