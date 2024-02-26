import { ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const ProductBox = ({ title, description, image }) => {
  return (
    <div className="flex flex-col basis-1/4 text-white bg-[#0F172A] gap-5 rounded-lg shadow-2">
          <img src={image} className="rounded-t-lg" />
          <div className="flex flex-col gap-3 m-5 ">
            <h1 className="font-bold">{title}</h1>
            <p>
              {description}
            </p>
            <div className="flex flex-row border-2 border-white rounded-[8px] p-3 items-center justify-center w-full gap-2">
              <ShoppingCart size={16} strokeWidth={1} className="text-white" />
              <Link className="text-white">Buy now</Link>
            </div>
          </div>
        </div>
  );
}

export default ProductBox;