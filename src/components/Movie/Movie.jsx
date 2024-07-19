import { Link, NavLink } from "react-router-dom";
import s from "./Movie.module.css";

const Movie = ({ release_date, poster_path, original_title, movieId }) => {
  return (
    <li className={s.item}>
      <Link to={`/movies/${movieId}`}>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={original_title}
        />
      </Link>
      <NavLink to="/" className={s.link}>
        {original_title}
      </NavLink>
      <p className={s.release}>{release_date}</p>
    </li>
  );
};

export default Movie;
