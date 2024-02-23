import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../services/api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const reviewsData = await fetchMovieReviews(movieId);
        if (reviewsData && Array.isArray(reviewsData.results)) {
          setReviews(reviewsData.results);
        } else {
          setReviews([]);
        }
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
        setReviews([]);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <strong>{review.author}</strong>: {review.content}
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
