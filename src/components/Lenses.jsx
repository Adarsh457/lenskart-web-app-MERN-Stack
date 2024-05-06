import { React } from "react";

const Lens = ({ item }) => {
  return (
    <div className="mx-auto w-1/2 p-2 bg-white shadow rounded-xl hover:rounded-none cursor-pointer relative overflow-hidden">
      <img src={item.image} alt="glasses" className="w-full" />
      <div className="py-4">
        <div className="text-center">
          <h3 className="text-sm md:text-xl text-gray-500">{item.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default Lens;
