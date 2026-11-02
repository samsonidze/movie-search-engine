const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

if (!API_KEY) {
  console.warn("VITE_TMDB_API_KEY is not set — add it to a .env file (see .env.example).");
}

async function request(path, params = {}) {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("api_key", API_KEY);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);

  const response = await fetch(url);
  if (!response.ok) throw new Error(`TMDB request failed: ${response.status}`);
  const data = await response.json();
  return data.results;
}

export const getPopularMovies = () => request("/movie/popular");

export const searchMovies = (query) => request("/search/movie", { query });
