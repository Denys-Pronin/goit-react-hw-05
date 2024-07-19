import { NavLink, useLocation } from "react-router-dom";
import Movie from "../Movie/Movie";
import s from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {movies.map((movie) => {
        if (movie.poster_path == null) {
          return;
        }
        return (
          <NavLink
            className={s.link}
            key={movie.id}
            state={location}
            to={`/movies/${movie.id}`}
          >
            <Movie
              release_date={movie.release_date}
              poster_path={movie.poster_path}
              original_title={movie.original_title}
              movieId={movie.id}
            />
          </NavLink>
        );
      })}
    </ul>
  );
};

export default MovieList;
