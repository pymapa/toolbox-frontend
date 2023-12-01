import { writable, type Writable } from "svelte/store"
import type { StravaUser } from "./types/StravaUser"

export const currentUser: Writable<StravaUser | null> = writable(null);