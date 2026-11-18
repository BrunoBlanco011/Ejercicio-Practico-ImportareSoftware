import type { PlayerStats } from '../domain/types';

type Props = {
  rows: PlayerStats[];
};

export function StatsTable({ rows }: Props) {
  if (rows.length === 0) {
    return <p className="message">Ningún jugador coincide con la búsqueda.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Jugador</th>
          <th scope="col">Equipo</th>
          <th scope="col">Posición</th>
          <th scope="col" className="number">Goles</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((player) => (
          <tr key={player.id}>
            <td>{player.name}</td>
            <td>{player.team}</td>
            <td>{player.position}</td>
            <td className="number">{player.goals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
