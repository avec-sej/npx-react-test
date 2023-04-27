import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    /* shortcut
    const json = await (
      await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    */
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimun_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    /* before using async/await
    fetch(
      `https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`
    ).then(response => response.json()
    ).then(json => {
      setMovies(json.data.movies);
      setLoading(false);
    });
    */
    getMovies();
  }, []);
  
  return (
    <div>
      {loading? <h1>Loading...</h1> : 
        <div>
          {movies.map(movie =>
            <div 
              key={movie.id}
            >
                <hr />
                <img src={movie.medium_cover_image}/>
                <h2>{movie.title}</h2>
                <p>{movie.summary}</p>
                <ul>
                    {movie.genres.map(g => <li key={g}>{g}</li>)}
                </ul>
            </div>
          )}
        </div>
      }
    </div>
  )
}

export default App;
