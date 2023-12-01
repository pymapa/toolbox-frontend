export type StravaUser = {
  stravaAccessToken: string;
  stravaRefreshToken: string;
  stravaExpiresAt: number;
  stravaExpiresIn: number;
  stravaAthleteId: number;
  profileImage: {
    medium: string;
    large: string;
  }
}