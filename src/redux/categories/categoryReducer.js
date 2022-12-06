import * as types from "../types";

const initialState = {
  categories: [],
  changes: false,
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        changes: true,
      };

    case types.FILTER_BY_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
};