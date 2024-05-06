import React from "react";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";
import CartProducts from "../components/CartProducts";
import { Link } from "react-router-dom";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { products } = useContext(StoreContext);
  return (
    <div className="">
      <Navbar />
      <div className="md:w-3/4 m-10 md:m-40 p-5 md:border text-center ">
        {products.length === 0 ? (
          <div className="flex justify-around items-center">
            <div className=" border p-4">
              <img
                src={process.env.PUBLIC_URL + "/empty_cart.svg"}
                className="w-[200px] md:w-[400px]"
                alt=""
              />
            </div>
            <div className="">
              <h1 className="font-bold text-sm md:text-lg">
                Oops! No Products in Your Cart.
              </h1>

              <button className="border rounded-2xl text-xs md:text-lg p-2 mt-2 bg-blue-600 font-semibold text-white shadow-lg hover:bg-blue-500">
                <Link to="/" className="mt-5">
                  Continue Shopping
                </Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-between flex-col-reverse md:flex-row gap-6">
            <div className=" border md:border-r mt-5 md:w-2/4">
              <CartTotal />
            </div>

            <div className="w-full">
              {products.map((product, i) => {
                return <CartProducts item={product} key={i} />;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
