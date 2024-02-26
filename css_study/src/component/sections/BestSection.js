import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import sneakers from "../../assets/image/Picture.png";

const BestSection = () => {
  return (
    <div className="flex flex-col bg-[#0F172A] w-full py-10 gap-10">
      <div className="flex flex-row items-center justify-between px-24">
        <h1 className="text-4xl font-bold text-white">The best of the best</h1>
        <div className="border-2 border-white rounded-[8px] p-3 w-44 text-center">
          <Link className="text-white">Sign up now</Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-around">
        <div className="flex flex-col basis-1/5 text-white gap-5 rounded-lg shadow-2 ">
          <img src={sneakers}  className="rounded-t-lg"/>
          <div className="flex flex-col gap-3 m-5">
            <h1 className="font-bold">Title</h1>
            <p >
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
            <div className="flex flex-row border-2 border-white rounded-[8px] p-3 items-center justify-center w-full gap-2">
              <ShoppingCart size={16} strokeWidth={1} className="text-white" />
              <Link className="text-white">Buy now</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-1/5 text-white gap-5 rounded-lg shadow-2 ">
          <img src={sneakers}  className="rounded-t-lg"/>
          <div className="flex flex-col gap-3 m-5">
            <h1 className="font-bold">Title</h1>
            <p >
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
            <div className="flex flex-row border-2 border-white rounded-[8px] p-3 items-center justify-center w-full gap-2">
              <ShoppingCart size={16} strokeWidth={1} className="text-white" />
              <Link className="text-white">Buy now</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col basis-1/5 text-white gap-5 rounded-lg shadow-2 ">
          <img src={sneakers}  className="rounded-t-lg"/>
          <div className="flex flex-col gap-3 m-5">
            <h1 className="font-bold">Title</h1>
            <p >
              Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
            </p>
            <div className="flex flex-row border-2 border-white rounded-[8px] p-3 items-center justify-center w-full gap-2">
              <ShoppingCart size={16} strokeWidth={1} className="text-white" />
              <Link className="text-white">Buy now</Link>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default BestSection;
