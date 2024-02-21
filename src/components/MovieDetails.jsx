import { useState, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { fetchMovieById } from '../components/Api';

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
          />
          <p>{movie.overview}</p>
          <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          <p>Genres: {movie.genres.map(genre => genre.name).join(', ')}</p>
          <link to="cast">Show Cast</link>
          <link to="reviews">Show Reviews</link>
          <Outlet />
        </div>
      )}
    </div>
  );
}
