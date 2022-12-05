import React from "react";
import s from "../styles/Home.module.css";
import { NavBar, ResultSearch } from ".";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div>
      
      <div>
        <NavBar />
      </div>
      {products.length >= 1 ? (
        <ResultSearch />
      ) : (
       
        <div className={s.home__container}>
           
          <Link to={"/cards"}>
            <div className={`${s.card} ${s.card__entradas}`}>
              <h2>Entradas</h2>
              
            </div>
          </Link>

          <Link to={"/cards"}>
            <div className={`${s.card} ${s.card__ensaladas}`}>
              <h2>Ensaladas</h2>
            </div>
          </Link>

          <Link to={"/cards"}></Link>
          <div className={`${s.card} ${s.card__sopas}`}>
            <h2>Sopas</h2>
          </div>
          <Link />

          <Link to={"/cards"}>
            <div className={`${s.card} ${s.card__principales}`}>
              <h2>Platos principales</h2>
            </div>
          </Link>

          <Link to={"/cards"}>
            <div className={`${s.card} ${s.card__bebidas}`}>
              <h2>Bebidas</h2>
            </div>
          </Link>

          <Link to={"/cards"}>
            <div className={`${s.card} ${s.card__postres}`}>
              <h2>Postres</h2>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};
