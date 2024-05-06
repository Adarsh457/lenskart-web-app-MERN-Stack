import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import { storeData } from "../Data/data";
import { toast } from "react-toastify";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (product) => {
    const updatedCart = state.products;
    const prod = updatedCart.find((ele) => ele.id === product.id);
    if (prod) {
      return toast.info(
        "This product has already been Added in the cart. You can increase the Quantity."
      );
    } else {
      updatedCart.push({ ...product, Qty: 1 });
      dispatch({
        type: "ADD",
        payload: updatedCart,
      });
    }
  };

  const decQty = (product) => {
    if (product.Qty > 1) {
      const updatedCart = state.products.map((item) => {
        if (item.id === product.id) {
          const updatedItem = { ...item }; // Create a copy of the item
          updatedItem.Qty--; // Decrease the quantity
          // Update price and discount if necessary
          const prevValue = storeData.find((ele) => ele.id === product.id);
          if (prevValue) {
            updatedItem.price = updatedItem.Qty * prevValue.price;
            updatedItem.discount = updatedItem.Qty * prevValue.discount;
          }
          return updatedItem; // Return the updated item
        }
        return item; // Return unchanged item if ID doesn't match
      });

      // Dispatch action to update state
      dispatch({
        type: "DECQTY",
        payload: updatedCart,
      });
    }
  };

  const incQty = (product) => {
    const updatedCart = state.products.map((item) => {
      if (item.id === product.id) {
        const updatedItem = { ...item }; // Create a copy of the item
        updatedItem.Qty++; // Increase the quantity
        // Update price and discount if necessary
        const prevValue = storeData.find((ele) => ele.id === product.id);
        if (prevValue) {
          updatedItem.price = updatedItem.Qty * prevValue.price;
          updatedItem.discount = updatedItem.Qty * prevValue.discount;
        }
        return updatedItem; // Return the updated item
      }
      return item; // Return unchanged item if ID doesn't match
    });

    // Dispatch action to update state
    dispatch({
      type: "DECQTY",
      payload: updatedCart,
    });
  };

  const addLikedProducts = (product) => {
    const updatedLikedProducts = state.likedProducts;
    updatedLikedProducts.push(product);
    dispatch({
      type: "ADDLikedPRODUCTS",
      payload: updatedLikedProducts,
    });
  };

  const CurrentUser = (user) => {
    let updatedUsers = state.CurrentUser;
    updatedUsers = user;
    dispatch({
      type: "CURRENTUSERS",
      payload: updatedUsers,
    });
  };
  const removeProduct = (product) => {
    const updatedCart = state.products.filter((item) => item.id !== product.id);
    dispatch({
      type: "REMOVE",
      payload: updatedCart,
    });
  };

  const toggleLikedProductsModal = (toggle) => {
    let updateToggleModal = state.likeToggle;

    if (toggle) {
      updateToggleModal = toggle;
    }

    dispatch({
      type: "TOGGLE_LIKED_PRODUCTS_MODAL",
      payload: updateToggleModal,
    });
  };

  const removeLikedProducts = (product) => {
    const updatedLikedProducts = state.likedProducts.filter(
      (item) => item.id !== product.id
    );
    dispatch({
      type: "REMOVELIKEDPRODUCTS",
      payload: updatedLikedProducts,
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    likedProducts: state.likedProducts,
    likeToggle: state.likeToggle,
    addToCart,
    addLikedProducts,
    removeProduct,
    removeLikedProducts,
    toggleLikedProductsModal,
    dispatch,
    CurrentUser,
    user: state.users,
    decQty,
    incQty,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
