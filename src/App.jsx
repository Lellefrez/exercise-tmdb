import { useState } from "react";
import { useEffect } from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar";
const apiKey = import.meta.env.VITE_API_KEY;
function App() {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=it-IT`
    )
      .then((response) => response.json())
      .then((obj) => setMovies(obj.results))
      .catch((error) => console.log(error));
  }, []);
  const gestisciRicerca = (termineRicerca) => {
    console.log(`Ricerca per: ${termineRicerca}`);
  };
  return (
    <>
      <h1>Film Del Momento</h1>
      <SearchBar onSearch={gestisciRicerca} />
      <div className="movies">
        {movies.map((m) => (
          <div key={m.id} className="movie-card">
            <figure>
              <img
                src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                alt=""
              />
            </figure>
            <div className="title">{m.title}</div>
            <p>{m.overview}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
