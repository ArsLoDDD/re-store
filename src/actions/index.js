const beautyLoaded = (newBeauty) => {
  return {
    type: "FETCH_BEAUTY_SUCCESS",
    payload: newBeauty,
  };
};
const beautyRequest = () => {
  return {
    type: "FETCH_BEAUTY_REQUEST",
  };
};

const beautyError = (error) => {
  return {
    type: "FETCH_BEAUTY_FAILURE",
    payload: error,
  };
};
export const beautyAddedToCart = (beautyId) => {
  return {
    type: "BEAUTY_ADDED_TO_CART",
    payload: beautyId,
  };
};
export const beautyDeleteFromCart = (beautyId) => {
  return {
    type: "BEAUTY_DELETE_FROM_CART",
    payload: beautyId,
  };
};
// export const beautyAddCountItemsToCart = (beautyId) => {
//   return {
//     type: "BEAUTY_ADD_COUNT_TO_CART",
//     payload: beautyId,
//   };
// };
export const beautyRemCountItemsToCart = (beautyId) => {
  return {
    type: "BEAUTY_REM_COUNT_FROM_CART",
    payload: beautyId,
  };
};
const fetchBeauty = (dispatch, beautySalonService) => () => {
  dispatch(beautyRequest());
  beautySalonService
    .getBeauty()
    .then((data) => dispatch(beautyLoaded(data)))
    .catch((err) => dispatch(beautyError(err)));
};
export { fetchBeauty };
