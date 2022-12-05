import React from "react";
import { Link } from "react-router-dom";
/* import s from "./Landing.module.css"; */
import "./Landing.css";

/* export function Landing() {
  return (
    <div className={s.root}>
      <div className={s.carrousel}>
        <div className={s.item} id={s.item1}>
          <div className={s.img} id={s.img1}>
            1
          </div>
          <div className={s.arrows}>
            <a href={s.item3}>
              <i>I</i>
            </a>
            <a href={s.item2}>
              <i>D</i>
            </a>
          </div>
        </div>

        <div className={s.item} id={s.item2}>
          <div className={s.img} id={s.img2}>
            2
          </div>
          <div className={s.arrows}>
            <a href="#">
              <i>I</i>
            </a>
            <i>D</i>
          </div>
        </div>
        <div className={s.item} id={s.item3}>
          <div className={s.img} id={s.img3}>
            3
          </div>
          <div className={s.arrows}>
            <i>I</i>
            <i>D</i>
          </div>
        </div>
      </div>

      <div className={s.container}>
        <div>
          <h1 className={s.title}>¡BIENVENIDOS!</h1>
          <h3 className={s.text}>
            Aquí podrás hacer tus pedidos de una manera rápida y fácil.
          </h3>
        </div>
        <div className={s.buttons}>
          <Link to="/home">
            <button className={s.button1}>SOY VISITANTE</button>
          </Link>
          <Link to="/login">
            <button className={s.button2}>SOY CLIENTE</button>
          </Link>
        </div>
      </div>
    </div>
  );
} */

export function Landing() {
  return (
    <div className="root">
      <div className="carrousel">
        <div className="item" id="item1">
          <div className="img" id="img1">
            1
          </div>
          <div className="arrows">
            <a href="#item3">
              <span class="material-symbols-outlined">arrow_back_ios</span>
            </a>
            <a href="#item2">
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </a>
          </div>
        </div>

        <div className="item" id="item2">
          <div className="img" id="img2">
            2
          </div>
          <div className="arrows">
            <a href="#item1">
              <span class="material-symbols-outlined">arrow_back_ios</span>
            </a>
            <a href="#item3">
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </a>
          </div>
        </div>

        <div className="item" id="item3">
          <div className="img" id="img3">
            3
          </div>
          <div className="arrows">
            <a href="#item2">
              <span class="material-symbols-outlined">arrow_back_ios</span>
            </a>
            <a href="#item1">
              <span class="material-symbols-outlined">arrow_forward_ios</span>
            </a>
          </div>
        </div>
      </div>

      <div className="points">
        <a href="#item1">
          <button class="point" state="active"></button>
        </a>
        <a href="#item2">
          <button class="point"></button>
        </a>
        <a href="#item3">
          <button class="point"></button>
        </a>
      </div>

      <div className="container">
        <div>
          <h1 className="title">¡BIENVENIDOS!</h1>
          <h3 className="text">
            Aquí podrás hacer tus pedidos de una manera rápida y fácil.
          </h3>
        </div>
        <div className="buttons">
          <Link to="/home">
            <button className="button1">SOY VISITANTE</button>
          </Link>
          <Link to="/login">
            <button className="button2">SOY CLIENTE</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
