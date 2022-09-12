const initialState = {
  beauty: [],
  isLoading: true,
  isError: null,
  cartItem: [],
  orderTotal: 220,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_BEAUTY_REQUEST":
      return {
        ...state,
        beauty: [],
        isLoading: true,
        isError: null,
      };
    case "FETCH_BEAUTY_SUCCESS":
      return {
        ...state,
        beauty: action.payload,
        isLoading: false,
        isError: null,
      };
    case "FETCH_BEAUTY_FAILURE":
      return {
        ...state,
        beauty: [],
        isLoading: false,
        isError: action.payload,
      };
    case "BEAUTY_ADDED_TO_CART":
      const beautyId = action.payload;
      const beauty = state.beauty.find((beauty) => beauty.id === beautyId);
      let newItem;
      const beautyUpdIndex = state.cartItem.findIndex(
        ({ id }) => id === beautyId
      );
      const itemUpd = state.cartItem[beautyUpdIndex];
      if (itemUpd) {
        newItem = {
          ...itemUpd,
          count: itemUpd.count + 1,
          total: itemUpd.total + beauty.price,
        };
      } else {
        newItem = {
          id: beautyId,
          title: beauty.title,
          count: 1,
          total: beauty.price,
        };
      }
      if (beautyUpdIndex < 0) {
        return {
          ...state,
          cartItem: [...state.cartItem, newItem],
        };
      } else {
        return {
          ...state,
          cartItem: [
            ...state.cartItem.slice(0, beautyUpdIndex),
            newItem,
            ...state.cartItem.slice(beautyUpdIndex + 1),
          ],
        };
      }

    case "BEAUTY_DELETE_FROM_CART":
      let qwe = [];

      const beautyItemCart = state.cartItem.map((beauty) => {
        if (beauty.id !== action.payload) {
          qwe = [...qwe, beauty];
        }
        return qwe;
      });
      console.log(beautyItemCart);
      return {
        ...state,
        cartItem: beautyItemCart,
      };
    default:
      return state;
  }
};
export default reducer;
