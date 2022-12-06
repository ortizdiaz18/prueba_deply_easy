import React from "react";
import s from "../styles/Home.module.css";
import { NavBar } from ".";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div className={s.homecontainer}>
        <Link to={"/cards/entradas"}>
          <div className={`${s.card} ${s.cardentradas}`}>
            <h2>Entradas</h2>
          </div>
        </Link>

        <Link to={"/cards/ensaladas"}>
          <div className={`${s.card} ${s.cardensaladas}`}>
            <h2>Ensaladas</h2>
          </div>
        </Link>

        <Link to={"/cards/sopas"}>
          <div className={`${s.card} ${s.cardsopas}`}>
            <h2>Sopas</h2>
          </div>
        </Link>

        <Link to={"/cards/carnes"}>
          <div className={`${s.card} ${s.cardprincipales}`}>
            <h2>Carnes</h2>
          </div>
        </Link>

        <Link to={"/cards/bebidas"}>
          <div className={`${s.card} ${s.cardbebidas}`}>
            <h2>Bebidas</h2>
          </div>
        </Link>

        <Link to={"/cards/postres"}>
          <div className={`${s.card} ${s.card__postres}`}>
            <h2>Postres</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};
