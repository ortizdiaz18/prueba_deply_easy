import * as types from "../types";

const initialState = {
  products: [],
  supportProducts: [],
  detailProduct: {},
  changes: false,
  productsCart: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        supportProducts: action.payload,
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

      return {
        ...state,
        products: orderedProducts,
      };

    case types.GET_PRODUCTS_BY_NAME:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };

    case types.FILTER_BY_CATEGORY:
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
        supportProducts: action.payload,
      };

    case types.GET_PRODUCT_BY_ID:
      console.log(action.payload);
      return {
        ...state,
        detailProduct: action.payload,
      };

    case types.SORT_PRODUCTS_BY_PRICE:
      let priceProducts = [...state.supportProducts];

      priceProducts = priceProducts.sort((a, b) => {
        if (a.price < b.price) return action.payload === "menor-mayor" ? -1 : 1;
        if (a.price > b.price) return action.payload === "menor-mayor" ? 1 : -1;
        return 0;
      });

      return {
        ...state,
        products: priceProducts,
      };

    case types.CLEAR_PRODUCTS:
      return {
        ...state,
        products: [],
        supportProducts: [],
      };

    case types.ADD_PRODUCT_CART:
      let { id, count } = action.payload;
      const exist = state.productsCart.some((p) => p.id === id);
      if (exist) {
        /*  const product = state.productsCart.findIndex((p) => p.id === id);
        let current = state.productsCart[product];
        let copyProductCart = state.productsCart;
        current.count = count + current.count;
        current.priceTotal = current.price * current.count;
        copyProductCart[product] = current; 
        return {
          ...state,
          productsCart: copyProductCart,
        };*/
        let newProductCart = state.productsCart.map((p) => {
          if (p.id === id) {
            return {
              id: p.id,
              count: p.count + count,
              image: p.image,
              name: p.name,
              price: p.price,
              priceTotal: p.price * (p.count + count),
            };
          } else {
            return p;
          }
        });
        return {
          ...state,
          productsCart: newProductCart,
        };
      } else {
        return {
          ...state,
          productsCart: [...state.productsCart, action.payload],
        };
      }

    case types.CLEAR_CART:
      return {
        ...state,
        productsCart: [],
      };
    default:
      return state;
  }
};
