import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReview } from "../../movie-api";
import Review from "../Review/Review";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const [reviews, setReviews] = useState();
  const { moviesId } = useParams();
  useEffect(() => {
    const fetchCredits = async () => {
      const data = await getMovieReview(moviesId);
      setReviews(data);
    };
    fetchCredits();
  }, [moviesId]);
  return (
    <ul className={s.list}>
      {reviews && reviews.length > 0
        ? reviews.map((review) => {
            return (
              <Review
                key={review.id}
                content={review.content}
                name={review.author_details.username}
              />
            );
          })
        : "No reviews yet"}
    </ul>
  );
};

export default MovieReviews;
