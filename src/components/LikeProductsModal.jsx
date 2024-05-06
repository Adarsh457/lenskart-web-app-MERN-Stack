import { React, useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { StoreContext } from "../context-and-reducer/StoreContext";
import { LuIndianRupee } from "react-icons/lu";

const LikeProductsModal = () => {
  const { likedProducts, likeToggle, dispatch, removeLikedProducts } =
    useContext(StoreContext);

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
      <div className="shadow-xl w-2/4 md:w-2/6 m-auto">
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
          return (
            <div
              key={id}
              className="flex items-center group relative p-5 bg-white hover:bg-yellow-100 cursor-pointer transition-all"
            >
              <div className="">
                <img src={imageOne} alt="" width={"100px"} />
              </div>
              <div className="ml-8 w-full">
                <p className="text-gray-600 text-sm md:text-xl font-semibold ">{name}</p>
                <div className="flex items-center mt-2">
                  <strong className="flex items-center">
                    <LuIndianRupee /> {(price - discount).toLocaleString()}
                  </strong>
                  <strike className="ml-2 flex items-center text-gray-400">
                    <LuIndianRupee /> {item.price.toLocaleString()}
                  </strike>
                </div>
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
