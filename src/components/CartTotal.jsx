import { useContext, React } from "react";
import { StoreContext } from "../context-and-reducer/StoreContext";
import { GoTag } from "react-icons/go";
import { LuIndianRupee } from "react-icons/lu";

const CartTotal = () => {
  const { products } = useContext(StoreContext);
  const totalPrice = products.reduce((a, b) => a + (b.price - b.discount), 0);
  const totalDiscountPrice = products.reduce((a, b) => a + b.price, 0);
  const CartItem = products.reduce((a, b) => a + b.Qty, 0);

  var totalDiscount = 0;
  products.forEach((item) => {
    totalDiscount += item.price;
  });
  return (
    <div className="">
      <div className="p-4">
        <div className="">
          <h2 className="font-semibold text-left text-gray-500 uppercase">
            coupons
          </h2>
          <div className="flex justify-between items-center mt-6">
            <GoTag className="text-2xl text-black-700" />
            <h2 className="font-bold text-black-700 mr-20">Apply Coupons</h2>
            <button className="border-2 rounded-sm border-red-400 p-2 w-56 md:w-1/4 text-red-500 font-semibold">
              Apply
            </button>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="font-semibold text-left text-gray-500 uppercase">
            Gifting and Persionalisation
          </h2>
          <div className="mt-4 w-3/4 md:w-full bg-orange-100 rounded flex justify-between items-center">
            <div className="ml-4">
              <img
                src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
                width={"70px"}
                alt=""
              />
            </div>
            <div className="m-2 text-left">
              <h1 className="font-bold text-black-600">
                Buying for a loved one ?
              </h1>
              <p>Gift wrap and personalised message on card, Only for 25</p>
              <div className="">
                <button className="mt-2 border-red-400 text-red-400 font-bold uppercase">
                  Add gift wrap
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-semibold text-left text-gray-500 uppercase">
            price details <span className="capitalize">({CartItem} items)</span>
          </h2>
          <div className="border-b text-left">
            <div className="w-full mt-4">
              <p className="capitalize">
                total MRP{" "}
                <span className="float-right flex items-center">
                  <LuIndianRupee />
                  {totalDiscountPrice.toLocaleString()}
                </span>
              </p>
            </div>
            <div className="w-full mt-2">
              <p className="capitalize">
                Discount on MRP{" "}
                <span className="float-right flex items-center text-green-500">
                  {" "}
                  - <LuIndianRupee />
                  {(totalDiscount - totalPrice).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="w-full mt-2">
              <p className="capitalize">
                Coupon Discount
                <span className="float-right text-red-500 cursor-pointer">
                  Apply Counpon
                </span>
              </p>
            </div>
            <div className="w-full mt-2 mb-5">
              <p className="capitalize">
                Shipping Fee{" "}
                <span className="float-right text-green-500 uppercase">
                  Free
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <div className="w-full mt-6">
              <p className="capitalize font-bold text-left">
                total amount{" "}
                <span className="float-right flex items-center">
                  <LuIndianRupee />
                  {(
                    totalDiscountPrice -
                    (totalDiscount - totalPrice)
                  ).toLocaleString()}
                </span>
              </p>
            </div>
            <div className="mt-6 button">
              <button className="w-full p-4 bg-pink-600  hover:bg-pink-700 font-bold uppercase tracking-widest text-white rounded">
                place order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
