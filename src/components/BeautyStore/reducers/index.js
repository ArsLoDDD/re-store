const initialState = {
  beauty: [],
  isLoading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BEAUTY_LOADED":
      return { beauty: action.payload, isLoading: false };
    default:
      return state;
  }
};
export default reducer;
