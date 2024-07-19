import { useEffect, useState } from "react";
import { getMovieCast } from "../../movie-api";
import { useParams } from "react-router-dom";
import Actor from "../Actor/Actor";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const [credits, setCredits] = useState();
  const { moviesId } = useParams();
  useEffect(() => {
    const fetchCredits = async () => {
      const data = await getMovieCast(moviesId);
      setCredits(data);
    };
    fetchCredits();
  }, [moviesId]);

  return (
    <ul className={s.list}>
      {credits &&
        credits.map((credit) => {
          if (credit.profile_path == null) {
            return;
          }

          return (
            <Actor
              key={credit.id}
              imgUrl={`https://image.tmdb.org/t/p/w200/${credit.profile_path}`}
              name={credit.name}
            />
          );
        })}
    </ul>
  );
};

export default MovieCast;
