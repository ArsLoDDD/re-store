const initialState = {
  beauty: [],
  isLoading: true,
  isError: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BEAUTY_REQUESTED":
      return {
        beauty: [],
        isLoading: true,
        isError: null,
      };
    case "BEAUTY_LOADED":
      return {
        beauty: action.payload,
        isLoading: false,
        isError: null,
      };
    case "BEAUTY_ERROR":
      return {
        beauty: [],
        isLoading: false,
        isError: action.payload,
      };

    default:
      return state;
  }
};
export default reducer;
