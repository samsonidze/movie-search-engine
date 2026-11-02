# Movie Search

Search the TMDB catalogue, browse what's popular right now, and keep a favourites list that survives reloads.

**Live demo:** https://movie-search-engine-coral.vercel.app

## Features
- **Popular on load** – the home page fetches TMDB's current popular movies
- **Search** – query the TMDB search endpoint; duplicate submits while a request is in flight are ignored
- **Favourites** – heart any card to save it; a dedicated `/favorites` route lists them
- **Persistence** – favourites live in `localStorage` via a React Context (`MovieContext`) with `addToFavorites`, `removeFromFavorites` and `isFavorite`
- Loading and error states, poster images from the TMDB image CDN, responsive card grid

## Tech
React 19 · Vite · React Router 7 · Context API · TMDB API · plain CSS modules per component

## Structure
```
src/
├── services/api.js        # Thin TMDB client (popular + search)
├── context/MovieContext.jsx
├── pages/                 # Home (search + results), Favorites
└── components/            # NavBar, MovieCard
```

## Run locally
1. Get a free API key from [TMDB](https://www.themoviedb.org/settings/api).
2. Create a `.env` file (see `.env.example`):
   ```
   VITE_TMDB_API_KEY=your_key
   ```
3. Install and start:
   ```bash
   npm install
   npm run dev
   ```

> Note: like any purely client-side app, the key is still visible in the built bundle. TMDB keys are read-only and rate-limited, so that's acceptable here; for a key with write access or billing a small proxy endpoint would be the right fix.

## What I'd improve next
- Debounced search-as-you-type and pagination
- A movie detail route with cast and trailer
- Move the favourites to a `useSyncExternalStore`-backed store or TanStack Query
