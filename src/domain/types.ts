export type Player = {
  id: string;
  name: string;
  team: string;
  position: string;
  active: boolean;
};

export type Goal = {
  goalId: string;
  playerId: string;
  minute: number;
};

export type PlayerStats = {
  id: string;
  name: string;
  team: string;
  position: string;
  goals: number;
};

export type TournamentData = {
  players: Player[];
  goals: Goal[];
};
