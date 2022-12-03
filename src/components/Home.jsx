import React from "react";
import s from "../styles/Home.module.css";
import { NavBar } from ".";
export const Home = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={s.home__container}>
        <div className={`${s.card} ${s.card__entradas}`}>
          <h2>Entradas</h2>
        </div>
        <div className={`${s.card} ${s.card__ensaladas}`}>
          <h2>Ensaladas</h2>
        </div>
        <div className={`${s.card} ${s.card__sopas}`}>
          <h2>Sopas</h2>
        </div>
        <div className={`${s.card} ${s.card__principales}`}>
          <h2>Platos principales</h2>
        </div>
        <div className={`${s.card} ${s.card__bebidas}`}>
          <h2>Bebidas</h2>
        </div>
        <div className={`${s.card} ${s.card__postres}`}>
          <h2>Postres</h2>
        </div>
      </div>
    </div>
  );
};
