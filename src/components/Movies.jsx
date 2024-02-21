import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../components/Api';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    if (query.trim()) {
      try {
        const fetchedMovies = await searchMovies(query);
        setMovies(fetchedMovies);
      } catch (error) {
        console.error('Error searching movies:', error);
      }
    }
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Type to search..."
        />
        <button type="submit">Search</button>
      </form>
      <div>
        {movies.map(movie => (
          <div
            key={movie.id}
            onClick={() => navigate(`/movies/${movie.id}`)}
            style={{ cursor: 'pointer' }}
          >
            {movie.title}
          </div>
        ))}
      </div>
    </div>
  );
}
