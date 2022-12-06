import React from "react";
import { useSelector } from "react-redux";
import { Card, NavBar } from ".";

export const ResultSearch = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      {products.map((s) => (
        <Card
          key={s.id}
          id={s.id}
          img={s.image}
          name={s.name}
          price={s.price}
        />
      ))}
    </div>
  );
};