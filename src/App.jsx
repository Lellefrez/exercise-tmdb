import { useState } from "react";
import { useEffect } from "react";
import "./App.scss";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";
const apiKey = import.meta.env.VITE_API_KEY;
function App() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

  console.log(movies);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=it-IT`
    )
      .then((response) => response.json())
      .then((obj) => setMovies(obj.results))
      .catch((error) => {
        console.log(error);
        setError('Ops, sembra ci sia stato un problema nel caricamento...Perfavore ricarica la pagina!')
      });
  }, []);
 
  const search = async (seacrhvalue) =>{
    const searchParams = new URLSearchParams({
      api_key:apiKey,
      query: seacrhvalue,
      language: 'it-IT'
    })
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?${searchParams.toString()}`)
    const {results} = await response.json();
    setMovies(results)
  }

  return (
    <>
    {error && <div className="error-msg">
    {error}
  </div>}
      <h1>Film Del Momento</h1>
      <SearchBar 
      onSearch={search}
      />
      <div className="movies">
        {movies.map((m) => (
          <MovieCard
          key={m.id}
          data={m}
          />
        ))}
      </div>
    </>
  );
}

export default App;
