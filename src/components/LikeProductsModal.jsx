import { React, useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { StoreContext } from "../context-and-reducer/StoreContext";
import { LuIndianRupee } from "react-icons/lu";
import { handleAddToCart } from "../utils/addToCart";
import { Link } from "react-router-dom";

const LikeProductsModal = () => {
  const { likedProducts, likeToggle, dispatch, removeLikedProducts, products, addToCart } =
    useContext(StoreContext);

  const handleAdd = (item) => {
    handleAddToCart(item, addToCart, () => {}, products);
  };

  const handleCloseModal = () => {
    dispatch({
      type: "TOGGLE_LIKED_PRODUCTS_MODAL",
      payload: false,
    });
  };

  return (
    <div
      className={`w-full fixed bottom-0 left-1/2 transform -translate-x-1/2 transition-transform duration-100 ease-in z-50 ${
        likeToggle ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="shadow-xl w-[300px] m-auto md:w-2/6">
        <div className="rounded-t-lg flex justify-between bg-blue-600 font-semibold text-white items-center p-2">
          <div className="ml-2 flex justify-between items-center">
            <h1 className="uppercase tracking-wider">Products</h1>
            <FaHeart className="ml-2" />
          </div>
          <div
            className="cursor-pointer font-bold mr-2"
            onClick={handleCloseModal}
          >
            <RxCross1 />
          </div>
        </div>
        {likedProducts.map((item) => {
          const { id, name, imageOne, price, discount } = item;

          const isAddedToCart = products.find(
            (cartItem) => cartItem.id === item.id
          );

          return (
            <div
              key={id}
              className="flex  items-center group relative p-5 bg-white hover:bg-yellow-100 cursor-pointer transition-all md:flex-row"
            >
              <div className="">
                <img src={imageOne} alt="" width={"100px"} />
              </div>
              <div className="ml-2 w-full">
                <p className="text-gray-600 text-sm font-semibold ml-2 md:text-xl md:ml-0">
                  {name}
                </p>
                <div className=" float-left flex flex-col items-center mt-2 md:flex-row md:float-none">
                  <strong className="flex items-center">
                    <LuIndianRupee /> {(price - discount).toLocaleString()}
                  </strong>
                  <strike className="ml-2 flex items-center text-gray-400">
                    <LuIndianRupee /> {price.toLocaleString()}
                  </strike>
                </div>
              </div>
              <div className=" text-left ">
                {isAddedToCart ? (
                  <button className="border text-xs md:text-base rounded-2xl p-2 mt-6 bg-blue-600 font-semibold text-white shadow-lg hover:bg-blue-500 w-20 md:w-28 ">
                    <Link to="/cart">Go To Cart</Link>
                  </button>
                ) : (
                  <button
                    className="border text-xs rounded-2xl p-2 mt-6 bg-blue-600 font-semibold text-white shadow-lg hover:bg-blue-500 w-24 md:text-base md:w-28 "
                    onClick={() => handleAdd(item)}
                  >
                    Add To Cart
                  </button>
                )}
              </div>
              <div
                className="absolute top-4 right-4 hidden group-hover:block"
                onClick={() => removeLikedProducts(item)}
              >
                <button>
                  <RxCross1 />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LikeProductsModal;
