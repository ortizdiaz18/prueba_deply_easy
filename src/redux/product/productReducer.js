import * as types from "../types";

const initialState = {
  products: [],
  supportProducts: [],
  detailProduct: {},
  changes: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        supportProducts: action.payload,
      };

    case types.GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: action.payload,
      };

    case types.SORT_BY_TIME_PREPARATION:
      let orderedProducts = [...state.supportProducts];

      orderedProducts = orderedProducts.sort((a, b) => {
        if (a.prep_time < b.prep_time)
          return action.payload === "min-max" ? -1 : 1;
        if (a.prep_time > b.prep_time)
          return action.payload === "min-max" ? 1 : -1;
        return 0;
      });
      console.log("ordenado", orderedProducts);
      return {
        ...state,
        products: orderedProducts,
      };

    // console.log("payload", action.payload);
    // console.log("payloadSupport", supportProducts);
    // if (action.payload === "min-max") {
    //   supportProducts = supportProducts.sort((a, b) => {
    //     console.log("reducerA");
    //     if (a.prep_time > b.prep_time) return 1;
    //     if (a.prep_time < b.prep_time) return -1;
    //     return 0;
    //   });
    //   return {
    //     ...state,
    //     products: supportProducts,
    //   };
    // }
    // if (action.payload === "max-min") {
    //   supportProducts = supportProducts.sort((a, b) => {
    //     console.log("reducerB");
    //     if (a.prep_time < b.prep_time) return 1;
    //     if (a.prep_time > b.prep_time) return -1;
    //     return 0;
    //   });

    //   return {
    //     ...state,
    //     products: supportProducts,
    //   };
    // }

    // case types.GET_PRODUCT_BY_ID:
    //   return {
    //     ...state,
    //     detailProduct: action.payload,
    //   };

    // case types.GET_PRODUCTS_BY_NAME:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };

    // case types.POST_PRODUCT:
    //   return {
    //     ...state,
    //   };

    // case types.UPDATE_PRODUCT:
    //   return {
    //     ...state,
    //   };

    // case types.DELETE_PRODUCT:
    //   return {
    //     ...state,
    //   };

    // case types.SORT_BY_SCORE:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };

    // case types.SORT_BY_PRICE:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };

    // case types.SORT_BY_TIME:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };

    // case types.FILTER_BY_DIET:
    //   return {
    //     ...state,
    //     products: action.payload,
    //   };

    default:
      return state;
  }
};
