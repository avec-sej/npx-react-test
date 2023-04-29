import PropTypes from "prop-types";

function MovieDetail({coverImg, title, genres, description, downloadCnt}){
    return (<div>
      <hr />
      <img src={coverImg} alt={title}/>
      <h1>{title}</h1>
      <ul>
          {genres.map(g => <li key={g}>{g}</li>)}
      </ul>
      <p>{description}</p>
      <h3>Download: {downloadCnt}</h3>
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