import * as actions from "./actions";

const initialState = {
  products: [],
  detailProduct: {},
  changes: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
