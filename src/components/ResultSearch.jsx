import React from "react";
import { useSelector } from "react-redux";
import { Card, NavBar, Details } from ".";
import { Link } from "react-router-dom";

export const ResultSearch = () => {
  const { products } = useSelector((state) => state.products);
  console.log(products);

  return (
    <div>
      <div>
        <NavBar />
      </div>
      {products.map((p) => (
        <Link key={p.id} to={`/details/${p.id}`}>
          <Card
            image={p.image}
            name={p.name}
            description={p.description}
            price={p.price}
          />
        </Link>
      ))}
    </div>
  );
};
