import React from "react";
import style from "../styles/Card.module.css";

export const Card = ({ name, price, image, description }) => {
  return (
    <div className={style.card__container}>
      <div>
        <img className={style.card__img} src={image} alt="plato" />
      </div>

      <div className={style.card_all_info}>
        <div className={style.card__info}>
          <h4 className={style.card_description_A}>
            <b>{name}</b>
          </h4>
          <div className={style.card_description_B}>
            {description.slice(0, 30) + "..."}
          </div>
        </div>

        <div className={style.card_description_C}>
          <div>{`$ ${price}`}</div>
          <div>
            <span className="material-symbols-outlined">add_circle</span>
          </div>
        </div>
      </div>
    </div>
  );
};
