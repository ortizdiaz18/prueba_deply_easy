import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/categories/actions";
import {
  getProductByCategory,
  getProducts,
  sortByTimePreparation,
} from "../redux/product/actions";
import style from "../styles/Cards.module.css";
import { Card } from "./Card";

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

  function handleSelectCategory(e) {
    dispatch(getProductByCategory(e.target.value));
  }
  function handleSelectOrden(e) {
    console.log("AAAA", e.target.value);
    dispatch(sortByTimePreparation(e.target.value));
  }

  return (
    <div>
      <h1>Aquí van a ir la Nav</h1>

      <div className={style.cards__container__select}>
        <select
          className={style.cards__select}
          onChange={(e) => handleSelectOrden(e)}
        >
          <option>Tiempo de preparación</option>
          <option value="min-max">Menor a mayor</option>
          <option value="max-min">Mayor a menor</option>
        </select>
      </div>
      <div>
        <select
          className={style.cards__select}
          onChange={(e) => handleSelectCategory(e)}
        >
          <option>Categorías</option>
          {categories.length &&
            categories.map((cat, i) => {
              return (
                <option
                  key={i}
                  className={style.cards__category}
                  value={cat.name_c}
                >
                  {cat.name_c}
                </option>
              );
            })}
        </select>
      </div>

      <div>
        {products.length &&
          products.map((p) => (
            <Card
              key={p.id}
              image={p.image}
              name={p.name}
              description={p.description}
              price={p.price}
            />
          ))}
      </div>
    </div>
  );
};
