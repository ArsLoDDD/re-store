const initialState = {
  beauty: [],
  isLoading: true,
  isError: null,
  cartItem: [],
  orderTotal: 220,
};
const updCartItems = (cartItems, item, idx) => {
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};
const updCartItem = (beauty, item) => {
  if (item) {
    return {
      ...item,
      count: item.count + 1,
      total: item.total + beauty.price,
    };
  } else {
    return {
      id: beauty.id,
      title: beauty.title,
      count: 1,
      total: beauty.price,
    };
  }
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
      const beautyUpdIndex = state.cartItem.findIndex(
        ({ id }) => id === beautyId
      );
      const itemUpd = state.cartItem[beautyUpdIndex];
      const newItem = updCartItem(beauty, itemUpd);

      return {
        ...state,
        cartItem: updCartItems(state.cartItem, newItem, beautyUpdIndex),
      };

    case "BEAUTY_DELETE_FROM_CART":
      return {
        ...state,
        cartItem: [
          ...state.cartItem.filter((item) => item.id !== action.payload),
        ],
      };
    case "BEAUTY_ADD_COUNT_TO_CART":
      const oldCartAddedItem = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      const beautyItemAddedToCart = state.beauty.find(
        (beauty) => beauty.id === action.payload
      );
      let newAddCartItem;
      if (oldCartAddedItem !== -1) {
        newAddCartItem = {
          ...state.cartItem[oldCartAddedItem],
          count: state.cartItem[oldCartAddedItem].count + 1,
          total:
            state.cartItem[oldCartAddedItem].total +
            beautyItemAddedToCart.price,
        };
      }
      return {
        ...state,
        cartItem: [
          ...state.cartItem.slice(0, oldCartAddedItem),
          newAddCartItem,
          ...state.cartItem.slice(oldCartAddedItem + 1),
        ],
      };
    case "BEAUTY_REM_COUNT_FROM_CART":
      const oldCartRemItem = state.cartItem.findIndex(
        (item) => item.id === action.payload
      );
      const beautyItemRemToCart = state.beauty.find(
        (beauty) => beauty.id === action.payload
      );
      let newRemCartItem;
      if (oldCartRemItem !== -1) {
        newRemCartItem = {
          ...state.cartItem[oldCartRemItem],
          count: state.cartItem[oldCartRemItem].count - 1,
          total:
            state.cartItem[oldCartRemItem].total - beautyItemRemToCart.price,
        };
      }
      return {
        ...state,
        cartItem: [
          ...state.cartItem.slice(0, oldCartRemItem),
          newRemCartItem,
          ...state.cartItem.slice(oldCartRemItem + 1),
        ],
      };
    default:
      return state;
  }
};
export default reducer;
