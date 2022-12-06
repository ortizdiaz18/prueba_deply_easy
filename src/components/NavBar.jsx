import React from "react";
import alert from "../images/Alarm.svg";
import cart from "../images/Cart.svg";
import user from "../images/User.svg";
import menu from "../images/Menu.svg";
import { SearchBar } from ".";
import s from "../styles/NavBar.module.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className={s.navbarcontainer}>
      <div className={s.navbarcontent}>
        <div className={s.logo}>
          <Link to={"/home"}>
            <h5>Easy Order</h5>
          </Link>
        </div>
        <div className={s.navbarallicons}>
          <img className={s.navbaricons} src={alert} alt="alert" />
          <img className={s.navbaricons} src={cart} alt="cart" />
          <img className={s.navbaricons} src={user} alt="user" />
          <img className={s.navbar__icons} src={menu} alt="menu" />
        </div>
      </div>
      <SearchBar />
    </div>
  );
};