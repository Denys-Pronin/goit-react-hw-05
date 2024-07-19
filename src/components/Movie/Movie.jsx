import { Link, NavLink, useLocation } from "react-router-dom";
import s from "./Movie.module.css";

const Movie = ({ release_date, poster_path, original_title, movieId }) => {
  const location = useLocation();
  return (
    <li className={s.item}>
      <img
        className={s.img}
        src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
        alt={original_title}
      />
      <p className={s.link}>{original_title}</p>
      <p className={s.release}>{release_date}</p>
    </li>
  );
};

export default Movie;
