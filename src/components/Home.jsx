import { useState, useEffect } from 'react';

import { fetchTrendingMovies } from '../components/Api';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getTrending = async () => {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    };
    getTrending();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <link to={`/movies/${movie.id}`}>{movie.title}</link>
          </li>
        ))}
      </ul>
    </div>
  );
}
