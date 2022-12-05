import * as types from "../types";
import axios from "axios";

export const getProducts = () => {
  return (dispatch) =>
    axios
      .get(`http://localhost:3000/api/v1/products`)
      .then((response) => {
        dispatch({
          type: types.GET_PRODUCTS,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const getProductById = (id) => {
  return (dispatch) =>
    axios
      .get(`http://localhost:3000/api/v1/product/:${id}`)
      .then((response) => {
        dispatch({
          type: types.GET_PRODUCT_BY_ID,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const getProductByCategory = (category) => {
  return (dispatch) =>
    axios
      .get(
        `http://localhost:3000/api/v1/products/filterByCategory?category=${category}`
      )
      .then((response) => {
        dispatch({
          type: types.GET_PRODUCTS_BY_CATEGORY,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
};

export const sortByTimePreparation = (order) => {
  console.log("action", order);
  return {
    type: types.SORT_BY_TIME_PREPARATION,
    payload: order,
  };
};

// export const postProducts = (data) => {
//   return axios
//     .post(`http://localhost:3000/api/v1/product`, data)
//     .then((response) => response)
//     .catch((error) => console.log(error));
// };

// export const updateProducts = (data) => {
//   return axios
//     .put(`URL/`, data)
//     .then((response) => response)
//     .catch((error) => console.log(error));
// };

// export const deleteProduct = (id) => {
//   return axios
//     .delete(`URL/${id}`)
//     .then((response) => response)
//     .catch((error) => console.log(error));
// };

// export const sortByScore = (score) => {
//   return (dispatch) =>
//     axios
//       .get(`URL/${score}`)
//       .then((response) => {
//         dispatch({
//           type: types.SORT_BY_SCORE,
//           payload: response.data,
//         });
//       })
//       .catch((error) => console.log(error));
// };

// export const sortByPrice = (price) => {
//   return (dispatch) =>
//     axios
//       .get(`URL/${price}`)
//       .then((response) => {
//         dispatch({
//           type: types.SORT_BY_PRICE,
//           payload: response.data,
//         });
//       })
//       .catch((error) => console.log(error));
// };

// export const sortBytime = (time) => {
//   return (dispatch) =>
//     axios
//       .get(`URL/${time}`)
//       .then((response) => {
//         dispatch({
//           type: types.SORT_BY_TIME,
//           payload: response.data,
//         });
//       })
//       .catch((error) => console.log(error));
// };

// export const filterByDiet = (diet) => {
//   return (dispatch) =>
//     axios
//       .get(`URL/${diet}`)
//       .then((response) => {
//         dispatch({
//           type: types.FILTER_BY_DIET,
//           payload: response.data,
//         });
//       })
//       .catch((error) => console.log(error));
// };
