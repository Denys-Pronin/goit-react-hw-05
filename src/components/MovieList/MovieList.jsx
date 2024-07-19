import s from "./MovieList.module.css";

const MovieList = ({ children }) => {
  return <ul className={s.list}>{children}</ul>;
};

export default MovieList;
