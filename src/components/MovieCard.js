const MovieCard = (props) => {
  return (
    <div className="movie_card">
      <h3>{props.title}</h3>
      <p>{props.year} </p>
      <p>{props.director} </p>
      <p>{props.duration} </p>
      <p>{props.genre1}</p>
      <p>{props.genre2}</p>
    </div>
  );
};

export default MovieCard;
