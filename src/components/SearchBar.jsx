import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import search from "../images/Search.svg";
import s from "../styles/SearchBar.module.css";
import * as actions from "../redux/product/actions";
import { Link } from "react-router-dom";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  console.log(input);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.getProductByName(input));
    setInput("");
  };
  return (
    <div className={s.container_search}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="search"
          placeholder=""
          value={input}
          onChange={handleChange}
        />
        <button className={s.btn} type="submit">
          <img src={search} alt="search" />
        </button>
      </form>
    </div>
  );
};
