import { useContext } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import { StoreContext } from "../context-and-reducer/StoreContext";
import { Link } from "react-router-dom";
import { handleAddToCart } from "../utils/addToCart";

const Products = ({ item, pageName }) => {
  const {
    addToCart,
    addLikedProducts,
    removeLikedProducts,
    toggleLikedProductsModal,
    likedProducts,
    products,
  } = useContext(StoreContext);

  const like = likedProducts.find((likedItem) => likedItem.id === item.id);
  const isAddedToCart = products.find(
    (addedToCartItem) => addedToCartItem.id === item.id
  );

  const handleAddLikes = () => {
    addLikedProducts(item);
    toggleLikedProductsModal(true);
  };

  const handleRemoveLikedProducts = () => {
    removeLikedProducts(item);
  };

  const { id, image, imageOne, name, price, discount, technicalInfo, colour } =
    item;
  // Home Page Product
  if (pageName === "product") {
    return (
      <>
        <div className="flex flex-col border m-5 hover:shadow cursor-pointer rounded-xl w-[240px] md:w-auto">
          <div className="p-2">
            <div className="mt-2 w-full">
              <button
                className="text-2xl float-right mr-2"
                onClick={() => {
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
            <div className="">
              <Link to={`/productDetail/${id}`}>
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
              </Link>
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
                    <Link to="/cart">Go To Cart</Link>
                  </button>
                ) : (
                  <button
                    className="border text-sm md:text-base rounded-2xl p-2 mt-2 bg-blue-600 font-semibold text-white shadow-lg hover:bg-blue-500"
                    onClick={() =>
                      handleAddToCart(item, addToCart, () => {}, products)
                    }
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
      </>
    );
  } else {
    // Products Details
    return (
      <>
        <div className="flex flex-col m-5 cursor-pointer rounded-xl md:w-auto">
          <div className="p-2">
            <div className="mt-2 w-full flex items-center justify-between">
              <h2 className=" text-gray-400 ">We Sell The Quality!</h2>
              <button
                className="text-2xl float-right mr-2 md:text-4xl"
                onClick={() => {
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
            <div className="mt-2">
              <h1 className=" font-semibold capitalize md:text-lg">{colour}</h1>

              <h1 className="mt-2 font-semibold capitalize text-gray-400 md:text-lg">
                {" "}
                Size : {technicalInfo?.frame_size}
              </h1>
            </div>
            <div className="">
              <Link to={`/productDetail/${id}`}>
                <div className="mt-6">
                  <img src={image} className="" alt="Lenses" width={"400px"} />
                </div>
              </Link>
            </div>
            <div className="mt-2 p-3 flex justify-between items-center">
              <div className="">
                <p className="text-gray-600 text-md md:text-xl font-semibold ">
                  The {name} One.
                </p>

                <div className="flex items-center mt-2 text-sm">
                  <strong className="flex items-center font-bold md:text-3xl ">
                    <LuIndianRupee />{" "}
                    <span className="ml-2 ">{item.price.toLocaleString()}</span>
                  </strong>
                  {/* <strike className="ml-2 flex items-center text-gray-400 ">
                      [ <LuIndianRupee /> {item.price.toLocaleString()} ]
                    </strike> */}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-2">
            <h1>Technical Information</h1>

            <div className=" ">
              <table className=" mt-4 w-full ">
                <tbody>
                  {Object.entries(technicalInfo).map(([key, value], index) => (
                    <tr key={index} className=" p-2 capitalize text-gray-400">
                      <td className="p-2">{key.replace(/_/g, " ")}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-yellow-50 p-2 rounded-b-xl">
            <h1 className=""> Limited Period Offer </h1>
            <h1 className=" mt-2 flex items-center text-xs text-yellow-500 font-semibold md:text-base">
              Get For <LuIndianRupee />
              {(price - discount).toLocaleString()} Coupon : &nbsp;
              <span className="uppercase">goldrush</span>
            </h1>
          </div>
          <div className=" mt-4 ">
            {isAddedToCart ? (
              <button className="border w-full text-sm md:text-base p-4 mt-2 bg-blue-600 font-semibold text-white shadow-lg hover:bg-blue-500">
                <Link to="/cart">Go To Cart</Link>
              </button>
            ) : (
              <button
                className="border w-full text-sm md:text-base p-4 mt-2 bg-blue-600 font-semibold text-white shadow-lg hover:bg-blue-500"
                onClick={() =>
                  handleAddToCart(item, addToCart, () => {}, products)
                }
              >
                Add To Cart
              </button>
            )}
          </div>
          <div className=" mt-4 border rounded-md flex items-center justify-between ">
            <span></span>
            <h1 className="">Try On</h1>
            <img
              className=""
              src="https://static.lenskart.com/media/desktop/img/pdp/try_on_model.png"
              alt=""
            />
          </div>
        </div>
      </>
    );
  }
};

export default Products;
