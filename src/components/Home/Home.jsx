import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './home.module.css';

import { fetchTrendingMovies } from '../Api';

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
      <ul className={css.homeList}>
        {trendingMovies.map(movie => (
          <li className={css.homeItem} key={movie.id}>
            <Link className={css.homeLink} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
