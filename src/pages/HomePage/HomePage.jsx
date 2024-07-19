import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movie-api";
import s from "./HomePage.module.css";
import Movie from "../../components/Movie/Movie";
import MovieList from "../../components/MovieList/MovieList";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setLoad(true);
        const trandingMovies = await getTrendingMovies();
        setMovies(trandingMovies);
      } catch {
        setError(true);
      } finally {
        setLoad(false);
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <div className={s.wrapper}>
      {load && <div className="globalLoad">Loading...</div>}
      {!load &&
        (error ? (
          <NotFoundPage />
        ) : (
          <MovieList>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                release_date={movie.release_date}
                poster_path={movie.poster_path}
                original_title={movie.original_title}
                movieId={movie.id}
              />
            ))}
          </MovieList>
        ))}
    </div>
  );
};

export default HomePage;
