import { useContext, React } from "react";
import { LuIndianRupee } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { StoreContext } from "../context-and-reducer/StoreContext";

const CartProducts = ({ item }) => {
  const { removeProduct, decQty, incQty } = useContext(StoreContext);

  return (
    <div className="relative border mt-5 p-5 rounded-lg">
      <div className="flex flex-col flex-wrap items-center md:flex-row">
        <div className="">
          <img src={item.imageOne} alt="" className=" min-w-16 w-[100px] md:w-[300px]" />
        </div>
        <div className=" w-full">
          <p className="text-gray-600 text-sm text-left  font-semibold   ">
            {item.name}
          </p>
          <div className="flex items-center mt-2">
            <strong className="flex items-center">
              <MdProductionQuantityLimits className="text-black-600" />
              <div className=" ml-2 flex border rounded-md justify-between items-center cursor-pointer w-16 py-1 px-2 ">
                <FaPlus className=" text-xs  " onClick={() => incQty(item)} />
                {item.Qty}
                <FaMinus className=" text-xs " onClick={() => decQty(item)} />
              </div>
            </strong>
          </div>
          <div className="flex items-center mt-2 text-sm">
            <strong className="flex items-center">
              <LuIndianRupee />{" "}
              <span className="ml-2">
                {(item.price - item.discount).toLocaleString()}
              </span>
            </strong>
            <strike className="ml-2 flex items-center text-gray-400 ">
              <LuIndianRupee /> {item.price.toLocaleString()}
            </strike>
          </div>
          <div className="mt-2 flex items-center text-sm md:text-lg ">
            <GiReturnArrow className="text-black-600" />
            <small className="ml-2 ">
              <span className="font-bold">14 days</span> return available
            </small>
          </div>
          <div className="mt-2 flex items-center text-xs md:text-lg ">
            <TbTruckDelivery className="text-green-600 text-sm md:text-lg" />
            <small className="ml-2 font-semibold">
              Delivered by{" "}
              <span className="text-yellow-600 tracking-widest">
                Express Way
              </span>
            </small>
          </div>
        </div>
      </div>
      <div className="absolute top-2 right-2 md:top-4 md:right-4">
        <button onClick={() => removeProduct(item)}>
          <RxCross1 />
        </button>
      </div>
    </div>
  );
};

export default CartProducts;
