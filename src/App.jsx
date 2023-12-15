import { useEffect } from "react";
import "./App.scss";
const apiKey = import.meta.env.VITE_API_KEY;
function App() {
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`).then(
      (response) => {
        console.log(response);
      }
    );
  }, []);
  return <></>;
}

export default App;
