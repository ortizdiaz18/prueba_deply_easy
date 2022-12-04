import React from "react";
import alert from "../images/Alarm.svg";
import cart from "../images/Cart.svg";
import user from "../images/User.svg";
import menu from "../images/Menu.svg";
import { SearchBar } from ".";
import s from "../styles/NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={s.navbar__container}>
      <div className={s.navbar__content}>
        <div className={s.logo}>
          <h5>Easy Orde</h5>
        </div>
        <div className={s.navbar__allicons}>
          <img className={s.navbar__icons} src={alert} alt="alert" />
          <img className={s.navbar__icons} src={cart} alt="cart" />
          <img className={s.navbar__icons} src={user} alt="user" />
          <img className={s.navbar__icons} src={menu} alt="menu" />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};
