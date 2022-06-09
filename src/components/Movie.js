import data from "../data";
import MovieCard from "./MovieCard";
import MovieList from "./MovieCard";

const Movie = () => {
  return (
    <div className="movie_container">
      <h5>Reactjs map Lev1_1</h5>
      <div className="movie_list">
        {data.map((el, i) => (
          <MovieCard
            key={i}
            title={el.title}
            year={el.year}
            director={el.director}
            duration={el.duration}
            rate={el.rate}
            genre1={el.genre[0]}
            genre2={el.genre[1]}
          />
        ))}
      </div>
    </div>
  );
};

export default Movie;
