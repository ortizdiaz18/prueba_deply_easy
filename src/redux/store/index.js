import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
<<<<<<< HEAD
=======
import { categoryReducer } from "../categories/categoryReducer";
>>>>>>> Yorsh355
import { productReducer } from "../product/productReducer";

const store = createStore(
  combineReducers({
<<<<<<< HEAD
    productReducer,
=======
    products: productReducer,
    categories: categoryReducer,
>>>>>>> Yorsh355
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
