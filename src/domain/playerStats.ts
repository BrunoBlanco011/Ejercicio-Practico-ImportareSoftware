import type { Goal, Player, PlayerStats } from './types';

export function buildPlayerStats(players: Player[], goals: Goal[]): PlayerStats[] {
  // Cuento los goles de cada jugador con un Map para no usar ciclos anidados
  const goalsByPlayer = new Map<string, number>();
  for (const goal of goals) {
    goalsByPlayer.set(goal.playerId, (goalsByPlayer.get(goal.playerId) ?? 0) + 1);
  }

  return players
    .filter((player) => player.active)
    .map((player) => ({
      id: player.id,
      name: player.name,
      team: player.team,
      position: player.position,
      goals: goalsByPlayer.get(player.id) ?? 0,
    }));
}

export function getTeams(stats: PlayerStats[]): string[] {
  return [...new Set(stats.map((player) => player.team))];
}

export function filterAndSort(stats: PlayerStats[], search: string, team: string): PlayerStats[] {
  return stats
    .filter((player) => team === 'Todos' || player.team === team)
    .filter((player) => player.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => b.goals - a.goals);
}
