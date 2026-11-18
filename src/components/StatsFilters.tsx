type Props = {
  search: string;
  team: string;
  teams: string[];
  onSearchChange: (value: string) => void;
  onTeamChange: (value: string) => void;
};

export function StatsFilters({ search, team, teams, onSearchChange, onTeamChange }: Props) {
  return (
    <div className="filters">
      <label>
        Buscar jugador
        <input
          type="search"
          value={search}
          placeholder="Ej. Sofía"
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </label>

      <label>
        Equipo
        <select value={team} onChange={(e) => onTeamChange(e.target.value)}>
          <option value="Todos">Todos</option>
          {teams.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
