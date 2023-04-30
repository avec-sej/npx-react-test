import PropTypes from "prop-types";
import styles from "../css/MovieDetail.module.css";

function MovieDetail({coverImg, title, genres, description, downloadCnt}){
    return (<div className={styles.movieDetails}>
        <div className={styles.movie__img}>
            <img src={coverImg} alt={title} />
        </div>
        <div className={styles.rightPage}>
            <h1 className={styles.movie__title}>{title}</h1>
            <ul className={styles.movie__genres}>
                {genres.map(g => <li key={g}>{g}</li>)}
            </ul>
            <p>{description}</p>
            <div className={styles.downloadCnt}>Download: {downloadCnt}</div>
        </div>
    </div>
  );
}

MovieDetail.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
    downloadCnt: PropTypes.number.isRequired
};

export default MovieDetail;