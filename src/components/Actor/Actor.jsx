import s from "./Actor.module.css";

const Actor = ({ name, imgUrl }) => {
  return (
    <li className={s.item}>
      <img className={s.img} src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  );
};

export default Actor;
