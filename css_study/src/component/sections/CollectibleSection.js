import React from "react";
import { Link } from "react-router-dom";
import sneakers from "../../assets/image/Pexels Photo by Ray Piedra.png";
import cup from "../../assets/icons/Icon.png";
import Cursus from "../../assets/icons/Icon (1).png";
import tv from "../../assets/icons/Icon (2).png";

import { PlayCircle } from "lucide-react";

const CollectibleSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full ">
      <div className="bg-white relative overflow-hidden w-full h-full">
        <div className="bg-[#FFECB3] absolute -right-[12rem] w-[130%] h-full  origin-right -rotate-[23deg] "></div>
        <div className="flex flex-col relative gap-10 w-full">
          <div className="flex flex-row  items-center justify-around gap-28 absolute top-10">
            <div className="flex flex-col basis-1/2 gap-5 px-2">
              <h1 className="text-4xl font-bold">Collectible Sneakers</h1>
              <p>
                Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
                suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum
                ultrices amet.
              </p>
              <div className="flex flex-row items-center gap-2">
                <div className="border-2 border-[#78350F] rounded-[8px] p-3 w-44 text-center">
                  <Link className="text-[#78350F]">Sign up now</Link>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <PlayCircle size={16} strokeWidth={1} />
                  Watch Demo
                </div>
              </div>
            </div>
            <div className="">
              <div className="">
                <div className=" bg-[#FBBF24] w-72 h-72 rounded-[50px]">
                  <img
                    src={sneakers}
                    alt="sneakers"
                    className=" absolute w-80 h-80"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 items-center justify-around absolute inset-x-0 top-[32rem]">
            <div className="flex flex-col basis-1/5 gap-2">
              <img src={cup} alt="cup" className="w-16 h-16" />
              <h1 className="text-l font-bold">Nibh viverra</h1>
              <p className="text-xs">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.{" "}
              </p>
            </div>
            <div className="flex flex-col basis-1/5 gap-2">
              <img src={Cursus} alt="cup" className="w-16 h-16" />
              <h1 className="text-l font-bold">Cursus amet</h1>
              <p className="text-xs">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.{" "}
              </p>
            </div>
            <div className="flex flex-col basis-1/5 gap-2">
              <img src={tv} alt="cup" className="w-16 h-16" />
              <h1 className="text-l font-bold">Ipsum fermentum</h1>
              <p className="text-xs">
                Sit bibendum donec dolor fames neque vulputate non sit aliquam.
                Consequat turpis natoque leo, massa.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectibleSection;
