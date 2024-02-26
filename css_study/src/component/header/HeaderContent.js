import React from "react";
import { Link } from "react-router-dom";

const HeaderContent = () => {
  return (
    <div className="flex flex-row text-[#78350F] justify-between items-center px-20 py-5 ">
      <div>
        <h1 className="font-bold text-2xl ">Collers</h1>
      </div>
      <div className="flex flex-row gap-10 items-center">
        <Link >Products</Link>
        <Link >Solutions</Link>
        <Link >Pricing</Link>
        <Link >Resources</Link>
        <Link >Log In</Link>
        <div className="border-2 border-[#78350F] rounded-[8px] p-3 w-44 text-center"><Link className="">Sign up now</Link></div>
        
      </div>
    </div>
  );
};

export default HeaderContent;
