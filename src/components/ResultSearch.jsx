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
      {products.map((p) => (
        <Card
        key={p.id}
        image={p.image}
        name={p.name}
        description={p.description}
        price={p.price}
        />
      ))}
    </div>
  );
};