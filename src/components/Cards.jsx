import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categories/actions";
import { getProducts } from "../redux/product/actions";
import style from "../styles/Cards.module.css";
import { Card } from "./Card";
getCategories;
export const Cards = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  console.log("products", products);
  console.log("categories", categories);

  return (
    <div>
      <h1>Aquí van a ir la Nav</h1>

      <div className={style.cards__container__select}>
        <select className={style.cards__select}>
          <option>Populares</option>
        </select>
      </div>

      <div className={style.cards__container__select}>
        <select className={style.cards__select}>
          <option>Tipos de dietas</option>
        </select>
      </div>

      {categories.length &&
        categories.map((category, i) => (
          <div className={style.cards__category} key={i}>
            <div>
              <b>{category.name_c}</b>
            </div>
            <div className={style.cards__span}>
              <span className="material-symbols-outlined">expand_more</span>
            </div>
          </div>
        ))}

      <div>
        {products.length &&
          products.map((p) => (
            <Card
              key={p.id}
              image={p.image}
              name={p.name}
              description={p.description}
              price={p.price}
              // icon={p.icon}
            />
          ))}
      </div>
      <Card />
    </div>
  );
};
