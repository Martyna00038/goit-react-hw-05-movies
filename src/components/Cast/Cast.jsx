import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCredits } from '../Api';
import css from './cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getMovieCredits = async () => {
      try {
        const castData = await fetchMovieCredits(movieId);
        setCast(castData || []);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    };

    getMovieCredits();
  }, [movieId]);

  return (
    <div>
      <ul className={css.castList}>
        {cast.map(actor => (
          <li className={css.castItem} key={actor.id}>
            <img
              src={
                actor.profile_path
                  ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                  : 'placeholder_image_url_here'
              }
              alt={actor.name}
              className={css.castImage}
            />
            <p className={css.castName}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
