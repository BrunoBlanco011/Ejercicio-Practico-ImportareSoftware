import type { Goal, Player, TournamentData } from '../domain/types';

export const MOCK_PLAYERS: Player[] = [
  { id: 'p1', name: 'Carlos Ruiz', team: 'Halcones', position: 'Delantero', active: true },
  { id: 'p2', name: 'Ana Gómez', team: 'Tigres', position: 'Medio', active: true },
  { id: 'p3', name: 'Luis Méndez', team: 'Halcones', position: 'Defensa', active: false },
  { id: 'p4', name: 'Sofía Castro', team: 'Lobos', position: 'Delantero', active: true },
  { id: 'p5', name: 'Diego Torres', team: 'Tigres', position: 'Delantero', active: true },
];

export const MOCK_GOALS: Goal[] = [
  { goalId: 'g1', playerId: 'p1', minute: 12 },
  { goalId: 'g2', playerId: 'p4', minute: 23 },
  { goalId: 'g3', playerId: 'p1', minute: 45 },
  { goalId: 'g4', playerId: 'p5', minute: 60 },
  { goalId: 'g5', playerId: 'p1', minute: 78 },
  { goalId: 'g6', playerId: 'p4', minute: 81 },
  { goalId: 'g7', playerId: 'p99', minute: 88 },
];

export function fetchTournamentData(shouldFail = false): Promise<TournamentData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error('Error al cargar los datos'));
      } else {
        resolve({ players: MOCK_PLAYERS, goals: MOCK_GOALS });
      }
    }, 800);
  });
}
