import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const {id} = useParams();
    const getMovie =  async () => {
        const json = await (await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        )).json();
        setMovies(json.data.movie);
        setLoading(false);
        //console.log(json);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
          {loading? <h1>Please wait...</h1> : 
            <div>
                <MovieDetail 
                  key={movies.id}
                  coverImg={movies.large_cover_image}
                  title={movies.title}
                  genres={movies.genres} 
                  description={movies.description_full}
                  downloadCnt={movies.download_count}
                />
            </div>
          }
        </div>
      );
}

export default Detail;