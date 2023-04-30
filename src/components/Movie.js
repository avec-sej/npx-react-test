import PropTypes from "prop-types";
import {Link} from "react-router-dom";
//Link : <a>태그 처럼 페이지를 이동시키는데, 전체 페이지를 리로드 하지 않고 페이지 이동이 가능하다.
import styles from "../css/Movie.module.css";

function Movie({id, coverImg, title, summary, genres}){
    return (<div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img}/>
      <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
      <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
      <ul className={styles.movie__genres}>
          {genres.map(g => <li key={g}>{g}</li>)}
      </ul>
  </div>
  );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;