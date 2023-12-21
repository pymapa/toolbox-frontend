

export async function POST() {
  const res = new Response(null, {
    status: 302,
  });

  res.headers.append('Set-Cookie', 'strava_access_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');
  res.headers.append('Set-Cookie', 'strava_refresh_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT');

  return res;
}