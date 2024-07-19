import s from "./Review.module.css";

const Review = ({ content, name }) => {
  return (
    <li className={s.item}>
      <div className={s.wrapper}>
        <div className={s.avatar}>
          <span className={s.textAvatar}>{name[0].toUpperCase()}</span>
        </div>
        <div className={s.name}>{name}</div>
      </div>
      <p className={s.content}>{content}</p>
    </li>
  );
};

export default Review;
