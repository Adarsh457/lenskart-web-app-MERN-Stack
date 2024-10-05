import { React, useContext } from "react";
import Navbar from "../components/Navbar";
import { storeData } from "../Data/data";
import Lens from "../components/Lenses";
import Products from "../components/Products";
import LikeProductsModal from "../components/LikeProductsModal";
import { StoreContext } from "../context-and-reducer/StoreContext";

const Home = () => {
  const { likedProducts } = useContext(StoreContext);
  return (
    <div>
      <Navbar />

      <div
        className="flex flex-row flex-wrap justify-between items-center gap-4 p-4 bg-gray-100 overflow-x-scroll md:flex-nowrap md:gap-10 md:p-6"
        style={{ scrollbarWidth: "none" }}
      >
        {storeData.map((item, i) => (
          <Lens item={item} key={i} />
        ))}
      </div>

      <section className="mt-4">
        <h1 className="ml-4 md:text-center md:text-xl">
          Explore More Products{" "}
        </h1>
        <div className="flex flex-row justify-around items-center flex-wrap p-4 mt-4">
          {storeData.map((item, i) => (
            <Products item={item} key={item.id} />
          ))}
        </div>
      </section>

      {likedProducts.length > 0 && (
        <section className="">
          <LikeProductsModal />
        </section>
      )}
    </div>
  );
};

export default Home;
