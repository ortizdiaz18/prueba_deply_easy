<<<<<<< HEAD
import * as actions from "./actions";
=======
import * as types from "../types";
>>>>>>> Yorsh355

const initialState = {
  products: [],
  detailProduct: {},
  changes: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
<<<<<<< HEAD
=======
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case types.GET_PRODUCT_BY_ID:
      return {
        ...state,
        detailProduct: action.payload,
      };

    case types.GET_PRODUCTS_BY_NAME:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };

    case types.POST_PRODUCT:
      return {
        ...state,
      };

    case types.UPDATE_PRODUCT:
      return {
        ...state,
      };

    case types.DELETE_PRODUCT:
      return {
        ...state,
      };

    case types.SORT_BY_SCORE:
      return {
        ...state,
        products: action.payload,
      };

    case types.SORT_BY_PRICE:
      return {
        ...state,
        products: action.payload,
      };

    case types.SORT_BY_TIME:
      return {
        ...state,
        products: action.payload,
      };

    case types.FILTER_BY_DIET:
      return {
        ...state,
        products: action.payload,
      };

>>>>>>> Yorsh355
    default:
      return state;
  }
};
