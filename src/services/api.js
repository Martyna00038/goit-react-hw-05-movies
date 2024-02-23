import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
axios.defaults.baseURL = BASE_URL;

axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTU4MGEwNzMwMWM4Y2Y2MDE1NmMzOGQ5NjViMzFjNyIsInN1YiI6IjY1ZDY0Y2M3MjVjZDg1MDE4NjdlYzI5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IGg87z05r1r2foqoV5oHcdgwaCCNHoQQNLbnMdGV8oE';

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
}

export const searchMovies = async query => {
  try {
    const response = await axios.get('/search/movie', {
      params: { query },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error during API call:', error);
    throw error;
  }
};

export async function fetchMovieById(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching movie by id:', error);
    throw error;
  }
}

export async function fetchMovieCredits(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
}

export async function fetchMovieReviews(movieId) {
  try {
    const response = await axios.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
}
