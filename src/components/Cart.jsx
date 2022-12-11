import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavBar } from ".";
import * as actions from "../redux/product/actions";
import s from "../styles/Cart.module.css";

export const Cart = () => {
  const { productsCart } = useSelector((state) => state.productsCart);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("pedido exitoso");
  };

  const handleToPay = (e) => {
    e.preventDefault();
    console.log("pagando...");
    dispatch(actions.clearCart());
  };

  return (
    <div>
      <NavBar />
      {productsCart.length >= 1 &&
        productsCart.map((p) => (
          <div key={p.id} className={s.container}>
            <div className={s.img}>
              <img src={p.image} alt={p.name} />
            </div>
            <div className={s.nameCantidad}>
              <h2>{p.name}</h2>
              <div className={s.cantidad}>
                <h3>Cantidad: </h3>
                <select id="cantidad" onChange={handleChange}>
                  <option value={p.cantidad}>{p.cantidad}</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>
            <div className={s.price}>
              <span>${p.price}</span>
            </div>
          </div>
        ))}
      <div className={s.conteiner_buttons}>
        <button className={s.btn1} onClick={handleClick}>
          Make an Order
        </button>

        <button className={s.btn2} onClick={handleToPay}>
          Go pay
        </button>
      </div>
    </div>
  );
};
