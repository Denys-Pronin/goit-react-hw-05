import { useState } from "react";
import s from "./MoviesPage.module.css";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getFilerMovies } from "../../movie-api";
import MovieList from "../../components/MovieList/MovieList";
import Movie from "../../components/Movie/Movie";

const MoviesPage = () => {
  const [params, setParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const query = params.get("query") ?? "";
    if (query == 0) {
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
    params.set("query", query);
    setParams(params);
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
        movies.length > 0 && (
          <MovieList>
            {movies.map((movie) => {
              if (movie.poster_path == null) {
                return;
              }
              return (
                <Movie
                  key={movie.id}
                  release_date={movie.release_date}
                  poster_path={movie.poster_path}
                  original_title={movie.original_title}
                  movieId={movie.id}
                />
              );
            })}
          </MovieList>
        )
      )}
    </div>
  );
};

export default MoviesPage;
