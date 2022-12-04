import React from "react";
import { usestate } from "react";
import { useDispatch } from "react-redux";
import search from "../images/Search.svg";
import s from "../styles/SearchBar.module.css";
import * as actions from "../redux/product/actions";

export const SearchBar = () => {
  const [input, setInput] = usestate("");
  return (
    <div className={s.container_search}>
      <form>
        <input
          className={s.input}
          type="text"
          name="search"
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
