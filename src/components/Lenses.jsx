import { React } from "react";

const Lens = ({ item }) => {
  return (
    <div className=" mx-auto w-[100px] p-2 bg-white shadow rounded-xl hover:rounded-none cursor-pointer relative overflow-hidden md:w-1/2">
      <img src={item.image} alt="glasses" className="w-full min-w-10" />
      <div className="py-4">
        <div className="text-center">
          <h3 className="text-sm md:text-xl text-gray-500">{item.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Lens;
