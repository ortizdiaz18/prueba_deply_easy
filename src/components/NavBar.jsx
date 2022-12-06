import React from "react";
import { SearchBar } from ".";
import s from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <div className={s.navbar__container}>
        <div className={s.navbar__content}>
          <div className={s.logo}>
            <Link to={"/home"}>
              <h5>Easy</h5>
              <h5>Order</h5>
            </Link>
          </div>
          <div className={s.navbar__allicons}>
            <span className="material-symbols-outlined">notifications</span>
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="material-symbols-outlined">account_circle</span>
            <span className="material-symbols-outlined">menu</span>
          </div>
        </div>
        <SearchBar />
      </div>
    </div>
  );
};
