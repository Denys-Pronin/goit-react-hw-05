import React from "react";
import { NavLink } from "react-router-dom";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={s.container}>
      <NavLink to="/" className={s.btn}>
        Back
      </NavLink>
      <h2 className={s.error}>
        Not Found <span>.</span>
      </h2>
    </div>
  );
};

export default NotFoundPage;
