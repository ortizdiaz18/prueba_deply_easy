import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Home,
  Landing,
  Login,
  Cards,
  ResultSearch,
  CreateProduct,
} from "./components";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import * as actionsCategory from "./redux/categories/actions";
import * as actions from "./redux/product/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getProducts());
  }, []);
  useEffect(() => {
    dispatch(actionsCategory.getCategories());
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cards/:category" element={<Cards />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="resultsearch" element={<ResultSearch />} />
      </Routes>
    </div>
  );
}

export default App;
