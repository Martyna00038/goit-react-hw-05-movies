import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../Api';
import css from './movieDetails.module.css';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const movieData = await fetchMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            className={css.movieImage}
          />
          <p className={css.movieDescription}>{movie.overview}</p>
          <p className={css.movieDescription}>
            User Score: {Math.round(movie.vote_average * 10)}%
          </p>
          <p className={css.movieDescription}>
            Genres: {movie.genres.map(genre => genre.name).join(', ')}
          </p>
          <Link className={css.movieLink} to="cast">
            Show Cast
          </Link>
          <Link className={css.movieLink} to="reviews">
            Show Reviews
          </Link>
          <Outlet />
        </div>
      )}
    </div>
  );
}
