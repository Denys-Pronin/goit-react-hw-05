import { useState } from "react";
import s from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getFilerMovies } from "../../movie-api";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const query = params.get("query") ?? "";
    if (!query) {
      return;
    }
    const fetchFilterMovie = async () => {
      try {
        setLoad(true);
        const data = await getFilerMovies(query);
        setMovies(data);
        if (data.length == 0) {
          setError(true);
        }
      } catch {
        setError(true);
      } finally {
        setLoad(false);
      }
    };
    fetchFilterMovie();
  }, [params]);

  const handleSearch = (e) => {
    const query = e.target.elements.query.value.trim().toLowerCase();
    setMovies([]);
    setError(false);
    e.preventDefault();
    setParams({ query: query });
  };
  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSearch} className={s.form}>
        <input
          name="query"
          placeholder="Search film or author"
          className={s.input}
          type="text"
        />
        <button className={s.button}>Search</button>
      </form>
      {load && <div className="globalLoad">Loading...</div>}
      {error ? (
        <div className="globalLoad">Not Found</div>
      ) : (
        movies.length > 0 && <MovieList movies={movies} />
      )}
    </div>
  );
};

export default MoviesPage;
