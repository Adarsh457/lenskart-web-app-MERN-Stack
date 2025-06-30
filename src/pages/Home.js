import { React, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { storeData } from "../Data/data";
import Lens from "../components/Lenses";
import Products from "../components/Products";
import LikeProductsModal from "../components/LikeProductsModal";
import { StoreContext } from "../context-and-reducer/StoreContext";
import ImgBanner from "../components/shared/ImgBanner";
import EyeWearBanners from "../components/shared/EyeWearBanners";

const Home = () => {
  const { likedProducts } = useContext(StoreContext);
  const [searchQuery, setSearchQuery] = useState("");

   // Filter products by search
  const filteredData = storeData.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />

      {/* Lens Section */}
      <section
        className="flex flex-row flex-wrap justify-between items-center gap-4 p-4 bg-gray-100 overflow-x-scroll md:flex-nowrap md:gap-10 md:p-6"
        style={{ scrollbarWidth: "none" }}
      >
        {storeData.map((item, i) => (
          <Lens item={item} key={i} />
        ))}
      </section>

      {/* Banners */}
      <section>
        <ImgBanner imgVal="https://static1.lenskart.com/media/desktop/img/h24/nov/campagin/plp-web/Home-harmony-desktop-extra500-model.png" />
        <ImgBanner
          sty="mt-5"
          imgVal="https://static1.lenskart.com/media/desktop/img/Aug24/22-aug-24/Other%20assets/New%20Web%20Banner.png"
        />
      </section>

      {/* Products */}
      <section className="mt-10">
        <h1 className="ml-4 text-center md:text-4xl">Explore More Products </h1>
        <div className="flex flex-row justify-around items-center flex-wrap p-4 mt-4">
          {filteredData.map((item, i) => (
            <Products item={item} key={item.id} pageName="product" />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section>
        <EyeWearBanners
          sty="mt-10"
          imgVal="https://static1.lenskart.com/media/desktop/img/16-sep-24/r1.jpeg"
          heading="Trending Sunglasses"
        />
        <EyeWearBanners
          sty="mt-10"
          imgVal="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif"
          heading="As Seen on Shark Tank"
        />
        <EyeWearBanners
          sty="mt-10"
          imgVal="https://static1.lenskart.com/media/desktop/img/2024/jun/eyetest/Turban-DesktopBanner.jpg"
          heading="Free Online Eye Test"
        />
        <EyeWearBanners
          sty="mt-10"
          imgVal="https://static5.lenskart.com/media/uploads/hechome11.png"
          heading="Book Eye Test at Home"
        />
      </section>

      {/* Liked Products Modal */}
      {likedProducts.length > 0 && (
        <section className="">
          <LikeProductsModal />
        </section>
      )}
    </>
  );
};

export default Home;
