import { useEffect, useState } from 'react';
import { fetchTournamentData } from '../data/tournamentApi';
import type { TournamentData } from '../domain/types';

export function useTournamentData() {
  const [data, setData] = useState<TournamentData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  function request(shouldFail: boolean) {
    fetchTournamentData(shouldFail)
      .then((result) => setData(result))
      .catch(() => setError('No se pudieron cargar los datos del torneo.'))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    request(false);
  }, []);

  function reload(shouldFail: boolean) {
    setLoading(true);
    setError('');
    setData(null);
    request(shouldFail);
  }

  return { data, loading, error, reload };
}
