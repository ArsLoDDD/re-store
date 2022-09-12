const initialState = {
  beauty: [],
  isLoading: true,
  isError: null,
  cartItem: [],
  orderTotal: 220,
};
const updOrder = (state, beautyId, quantity) => {
  const { beauty, cartItem } = state;
  const beautys = beauty.find(({ id }) => id === beautyId);
  const beautyUpdIndex = cartItem.findIndex(({ id }) => id === beautyId);
  const itemUpd = cartItem[beautyUpdIndex];
  const newItem = updCartItem(beautys, itemUpd, quantity);

  return {
    ...state,
    cartItem: updCartItems(cartItem, newItem, beautyUpdIndex),
  };
};
const updCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};
const updCartItem = (beauty, item = {}, quantity) => {
  const { id = beauty.id, count = 0, title = beauty.title, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * beauty.price,
  };
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
      return updOrder(state, action.payload, 1);
    case "BEAUTY_DELETE_FROM_CART":
      const item = state.cartItem.find(({ id }) => id === action.payload);
      return updOrder(state, action.payload, -item.count);
    // case "BEAUTY_ADD_COUNT_TO_CART":
    //   const oldCartAddedItem = state.cartItem.findIndex(
    //     (item) => item.id === action.payload
    //   );
    //   const beautyItemAddedToCart = state.beauty.find(
    //     (beauty) => beauty.id === action.payload
    //   );
    //   let newAddCartItem;
    //   if (oldCartAddedItem !== -1) {
    //     newAddCartItem = {
    //       ...state.cartItem[oldCartAddedItem],
    //       count: state.cartItem[oldCartAddedItem].count + 1,
    //       total:
    //         state.cartItem[oldCartAddedItem].total +
    //         beautyItemAddedToCart.price,
    //     };
    //   }
    //   return {
    //     ...state,
    //     cartItem: [
    //       ...state.cartItem.slice(0, oldCartAddedItem),
    //       newAddCartItem,
    //       ...state.cartItem.slice(oldCartAddedItem + 1),
    //     ],
    //   };
    case "BEAUTY_REM_COUNT_FROM_CART":
      return updOrder(state, action.payload, -1);

    default:
      return state;
  }
};
export default reducer;
