import { useState } from 'react';
import { StatsFilters } from './components/StatsFilters';
import { StatsTable } from './components/StatsTable';
import { buildPlayerStats, filterAndSort, getTeams } from './domain/playerStats';
import { useTournamentData } from './hooks/useTournamentData';

export default function App() {
  const { data, loading, error, reload } = useTournamentData();
  const [search, setSearch] = useState('');
  const [team, setTeam] = useState('Todos');
  const [simulateError, setSimulateError] = useState(false);

  // La tabla se calcula a partir de los datos y los filtros, no se guarda en el estado
  const stats = data ? buildPlayerStats(data.players, data.goals) : [];
  const teams = getTeams(stats);
  const rows = filterAndSort(stats, search, team);

  return (
    <main>
      <header>
        <h1>Estadísticas de jugadores</h1>
        <div className="toolbar">
          <label className="checkbox">
            <input
              type="checkbox"
              checked={simulateError}
              onChange={(e) => setSimulateError(e.target.checked)}
            />
            Simular error
          </label>
          <button onClick={() => reload(simulateError)} disabled={loading}>
            Recargar datos
          </button>
        </div>
      </header>

      {loading && <p className="message">Cargando...</p>}

      {error && (
        <div className="message error">
          <p>{error}</p>
          <button onClick={() => reload(simulateError)}>Reintentar</button>
        </div>
      )}

      {data && (
        <>
          <StatsFilters
            search={search}
            team={team}
            teams={teams}
            onSearchChange={setSearch}
            onTeamChange={setTeam}
          />
          <StatsTable rows={rows} />
        </>
      )}
    </main>
  );
}
