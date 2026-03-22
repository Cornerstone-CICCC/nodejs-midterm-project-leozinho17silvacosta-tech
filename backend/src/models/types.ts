export interface Favorite {
  teamId: string;
  comment: string;
  rating: number;
  expectedPoints: number;
}

export interface User {
  id: string;
  email: string;
  passwordHash: string;
  favorites: Favorite[];
}

export interface Team {
  id: string;
  name: string;
  group: string;
  MatchesCity: string,
  description: string;
  titles: number;
  starPlayer: string;
}