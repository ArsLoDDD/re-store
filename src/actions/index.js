const beautyLoaded = (newBeauty) => {
  return {
    type: "BEAUTY_LOADED",
    payload: newBeauty,
  };
};
const beautyRequest = () => {
  return {
    type: "BEAUTY_REQUESTED",
  };
};

const beautyError = (error) => {
  return {
    type: "BEAUTY_ERROR",
    payload: error,
  };
};
export { beautyLoaded, beautyRequest, beautyError };
