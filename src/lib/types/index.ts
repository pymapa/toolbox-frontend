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

export type StravaAthelte = {
  id: number;
  username: string;
  resource_state: number;
  firstname: string;
  lastname: string;
  bio: string;
  city: string;
  state: string;
  country: null | string;
  sex: 'M' | 'F';
  premium: boolean;
  summit: boolean;
  created_at: string;
  updated_at: string;
  badge_type_id: number;
  weight: number;
  profile_medium: string;
  profile: string;
  friend: null;
  follower: null;
}
