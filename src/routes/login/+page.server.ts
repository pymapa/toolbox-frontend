import type { LayoutServerLoad } from "../dashboard/$types";

export const load: LayoutServerLoad =  async (event) => {
  const session = await event.locals.getSession();

  console.log('session', session);

  return {
    session
  }
}