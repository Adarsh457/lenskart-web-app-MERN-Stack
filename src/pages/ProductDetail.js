import React from "react";
import { useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import Navbar from "../components/Navbar";
import { storeData } from "../Data/data";
import Products from "../components/Products";
import { TbView360Number } from "react-icons/tb";

const ProductImage = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={[3.5, 3.5, 3.5]} />;
};

const ProductDetail = () => {
  const { id } = useParams();
  const productId = Number(id);
  const productValue = storeData.find((ele) => ele.id === productId);

  if (!productValue) {
    return (
      <div>
        <Navbar />
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <Navbar />
      <div className=" md:w-3/4 md:my-56 md:m-auto md:grid md:grid-cols-4 md:gap-4">
        <div className=" relative border md:col-span-2 text-center ">
          <div className="hover:cursor-help absolute p-2 ">
            <span className=" flex text-orange-500 md:text-5xl">
              {" "}
              <TbView360Number /> <span className="font-bold">V</span>iew{" "}
            </span>
          </div>
          {/* Animation */}
          <Canvas>
            <Environment preset="studio" />
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} />
            <ProductImage modelPath={productValue?.image3D} />
            <OrbitControls />
          </Canvas>
        </div>
        {/* Product Details */}
        <div className=" md:col-span-2 ">
          <Products item={productValue} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
