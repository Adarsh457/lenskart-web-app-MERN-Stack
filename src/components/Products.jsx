import { useState, React, useContext, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import { StoreContext } from "../context-and-reducer/StoreContext";
import { Link } from "react-router-dom";

const Products = ({ item }) => {
  const {
    addToCart,
    addLikedProducts,
    removeLikedProducts,
    toggleLikedProductsModal,
    likedProducts,
    products,
  } = useContext(StoreContext);
  const [like, setLike] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    setLike(likedProducts.find((likedItem) => likedItem.id === item.id));
    //Items Already added to Cart
    setIsAddedToCart(
      products.find((addedToCartItem) => addedToCartItem.id === item.id)
    );
  }, [likedProducts, item.id, products, isAddedToCart]);

  const handleAdd = () => {
    addToCart(item);
    setIsAddedToCart(true);
  };
  const handleAddLikes = () => {
    addLikedProducts(item);
    toggleLikedProductsModal(true);
  };

  const handleRemoveLikedProducts = () => {
    removeLikedProducts(item);
  };
  const { image, imageOne, imageTwo, name, price, discount } = item;
  return (
    <div className="flex flex-col border m-5 hover:shadow cursor-pointer rounded-xl w-[240px] md:w-auto">
      <div className="p-2">
        <div className="mt-2 w-full">
          <button
            className="text-2xl float-right mr-2"
            onClick={() => {
              setLike((prev) => !prev);
              like ? handleRemoveLikedProducts() : handleAddLikes();
            }}
          >
            {like ? (
              <FaHeart className="text-red-500" />
            ) : (
              <CiHeart className=" cursor-pointer hover:text-red-500" />
            )}
          </button>
        </div>
        <div className="mt-4 group/item relative">
          <img
            src={imageOne}
            className="absolute top-5 visible group-hover/item:invisible"
            alt="Lenses"
            width={"400px"}
          />
          <img
            src={image}
            className="invisible group-hover/item:visible"
            alt=""
          />
        </div>
        <div className="mt-2 p-3 flex justify-between items-center">
          <div className="">
            <p className="text-gray-600 text-md md:text-xl font-semibold ">
              {name}
            </p>
            <strong className="flex items-center mt-2">
              <LuIndianRupee /> {price.toLocaleString()}
            </strong>
          </div>
          <div className="">
            {isAddedToCart ? (
              <button className="border text-sm md:text-base rounded-2xl p-2 mt-2 bg-blue-600 font-semibold text-white shadow-lg hover:bg-blue-500">
                {" "}
                <Link to="/cart">Go To Cart</Link>{" "}
              </button>
            ) : (
              <button
                className="border text-sm md:text-base rounded-2xl p-2 mt-2 bg-blue-600 font-semibold text-white shadow-lg hover:bg-blue-500"
                onClick={handleAdd}
              >
                Add To Cart
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="bg-yellow-50 p-2 w-full rounded-b-xl">
        <h1 className="flex items-center text-xs md:text-base text-yellow-500 font-semibold">
          Get For <LuIndianRupee />
          {(price - discount).toLocaleString()} Coupon : &nbsp;
          <span className="uppercase">goldrush</span>
        </h1>
      </div>
    </div>
  );
};

export default Products;
