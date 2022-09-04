const beautyLoaded = (newBeauty) => {
  return {
    type: "BEAUTY_LOADED",
    payload: newBeauty,
  };
};

export {
  beautyLoaded
}