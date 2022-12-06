import React from "react";
import style from "../styles/Card.module.css";

export const Card = ({ name, price }) => {
  return (
    <div className={style.card__container}>
      <div>
        <img
          className={style.card__img}
          src={
            "https://statics-cuidateplus.marca.com/cms/styles/natural/azblob/2022-09/plato-unico.jpg.webp?itok=0ZB-bG3S"
          }
          alt="plato"
        />
      </div>

      <div className={style.card__all__info}>
        <div className={style.card__info}>
          <h4 className={style.card__description__A}>
            <b>{name}</b>
          </h4>
          <div className={style.card__description__B}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </div>
        </div>

        <div className={style.card__description__C}>
          <div>{`$ ${price}`}</div>
          <div>
            <span className="material-symbols-outlined">add_circle</span>
          </div>
        </div>
      </div>
    </div>
  );
};
