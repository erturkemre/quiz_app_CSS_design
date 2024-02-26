import React from "react";
import { Link } from "react-router-dom";
import sneakers from "../../assets/image/Picture.png";
import ProductBox from "./ProductBox";
import sneakerss from "../../assets/image/sneakerss.png";
import snekaer from "../../assets/image/Picture (1).png";

const BestSection = () => {
  return (
    <div className="flex flex-col bg-[#0F172A] w-full py-20 gap-10">
      <div className="flex flex-row items-center justify-between px-24">
        <h1 className="text-4xl font-bold text-white">The best of the best</h1>
        <div className="border-2 border-white rounded-[8px] p-3 w-44 text-center">
          <Link className="text-white">Sign up now</Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around relative">
        <div className="flex flex-row w-full h-96 justify-between relative">
          <div className=" bg-[#BE185D] w-60 h-60 rounded-[50px] relative left-8 top-36"></div>
          <div className=" bg-[#0369A1] w-40 h-40 rounded-[50px] relative -top-5 left-40"></div>
          <div className=" bg-[#B45309] w-32 h-32 rounded-[50px] relative top-52 left-40"></div>
          <div className=" bg-[#A21CAF] w-48 h-48 rounded-[50px] relative top-60 -right-44"></div>
          <div className=" bg-[#15803D] w-52 h-52 rounded-[50px] relative top-5 right-10"></div>
        </div>

        <div className="flex flex-row  items-center justify-around absolute top-0 ">
          <ProductBox
            title="Title"
            description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            image={sneakers}
          />
          <ProductBox
            title="Title"
            description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            image={sneakerss}
          />
          <ProductBox
            title="Title"
            description="Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
            image={snekaer}
          />
        </div>
      </div>
    </div>
  );
};

export default BestSection;
