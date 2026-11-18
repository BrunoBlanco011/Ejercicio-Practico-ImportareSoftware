import { describe, expect, it } from 'vitest';
import { MOCK_GOALS, MOCK_PLAYERS } from '../data/tournamentApi';
import { buildPlayerStats, filterAndSort } from './playerStats';

const stats = buildPlayerStats(MOCK_PLAYERS, MOCK_GOALS);

describe('playerStats', () => {
  it('cuenta los goles y deja en 0 a quien no tiene', () => {
    const result = filterAndSort(stats, '', 'Todos').map((p) => [p.name, p.goals]);
    expect(result).toEqual([
      ['Carlos Ruiz', 3],
      ['Sofía Castro', 2],
      ['Diego Torres', 1],
      ['Ana Gómez', 0],
    ]);
  });

  it('no muestra jugadores inactivos', () => {
    expect(stats.find((p) => p.name === 'Luis Méndez')).toBeUndefined();
  });

  it('filtra por nombre y por equipo', () => {
    expect(filterAndSort(stats, 'ANA', 'Todos').map((p) => p.name)).toEqual(['Ana Gómez']);
    expect(filterAndSort(stats, '', 'Tigres').map((p) => p.name)).toEqual(['Diego Torres', 'Ana Gómez']);
  });
});
