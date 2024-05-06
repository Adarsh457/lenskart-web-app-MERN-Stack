export const initialState = {
  total: 0,
  products: [],
  likedProducts: [],
  likeToggle: false,
  users: null,
};

const storeReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        products: action.payload,
      };

    case "DECQTY":
      return {
        ...state,
        products: action.payload,
      };

    case "INCQTY":
      return {
        ...state,
        products: action.payload,
      };

    case "CURRENTUSERS":
      return {
        ...state,
        users: action.payload,
      };

    case "ADDLikedPRODUCTS":
      return {
        ...state,
        likedProducts: action.payload,
      };

    case "REMOVE":
      return {
        ...state,
        products: action.payload,
      };

    case "TOGGLE_LIKED_PRODUCTS_MODAL":
      return {
        ...state,
        likeToggle: action.payload,
      };

    case "REMOVELIKEDPRODUCTS":
      return {
        ...state,
        likedProducts: action.payload,
      };

    default:
      throw Error("Cannot match case in reducer");
      break;
  }
};

export default storeReducer;
