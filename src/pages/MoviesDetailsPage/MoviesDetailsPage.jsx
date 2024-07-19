import { useEffect, useState } from "react";
import { NavLink, Outlet, useParams } from "react-router-dom";
import { getMovieById, getMovieVideos } from "../../movie-api";
import s from "./MoviesDetailsPage.module.css";
import clsx from "clsx";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(false);
  const [load, setLoad] = useState(false);
  const { moviesId } = useParams();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoad(true);
        const responce = await getMovieById(moviesId);
        setMovie(responce);
      } catch {
        setError(true);
      } finally {
        setLoad(false);
      }
    };
    const fetchVideos = async () => {
      try {
        setLoad(true);
        const responce = await getMovieVideos(moviesId);
        setVideos(responce);
      } catch {
        setError(true);
      } finally {
        setLoad(false);
      }
    };
    fetchVideos();
    fetchMovies();
  }, [moviesId]);

  const trailer = videos.find(
    (video) => video.type === "Trailer" && video.site === "YouTube"
  );

  const makeLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.isActive);
  };

  return (
    <div>
      {load && <div className="globalLoad">Loading...</div>}
      {!load &&
        (error ? (
          <NotFoundPage />
        ) : (
          <div className={s.wrapper}>
            <NavLink to="/" className={s.btn}>
              Back
            </NavLink>
            <div className={s.imgWrapper}>
              <div className={s.videoBg}>
                {trailer && (
                  <iframe
                    className={s.iframe}
                    src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&cc_load_policy=0&mute=1&controls=0&modestbranding=1&showinfo=0&rel=0&loop=1&playlist=${trailer.key}`}
                    title={trailer.name}
                    frameBorder="0"
                  ></iframe>
                )}
              </div>
              <img
                className={s.poster}
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
            <div className={s.descr}>
              <p className={s.title}>{movie.original_title}</p>
              <ul className={s.genres}>
                {movie.genres &&
                  movie.genres.map((genre) => (
                    <li className={s.genre} key={genre.id}>
                      {genre.name}
                    </li>
                  ))}
              </ul>
              <p className={s.rating}>
                Rating: <span>{movie.vote_average}</span>
              </p>
              <p className={s.overview}>{movie.overview}</p>
            </div>
            <div className={s.nav}>
              <NavLink to="cast" className={makeLinkClass}>
                Actors
              </NavLink>
              <NavLink to="reviews" className={makeLinkClass}>
                Reviews
              </NavLink>
            </div>
            <Outlet />
          </div>
        ))}
    </div>
  );
};

export default MoviesDetailsPage;
