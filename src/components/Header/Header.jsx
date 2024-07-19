import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
import clsx from "clsx";
import { MdLocalMovies } from "react-icons/md";

const Header = () => {
  const makeLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.isActive);
  };

  const makeLogoClass = ({ isActive }) => {
    return clsx(s.link, s.logo, isActive && s.isActive);
  };
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={makeLogoClass} to="/">
            <MdLocalMovies />
            MovieList
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={makeLinkClass} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
