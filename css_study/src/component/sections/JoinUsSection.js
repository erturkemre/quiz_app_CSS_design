import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import video from "../../assets/image/Desktop.png";

const JoinUsSection = () => {
  return (
    <div className="bg-[#FFFBEB] w-full flex items-center justify-center h-screen">
      <div className="flex flex-row bg-white w-3/4 rounded-md border-2 p-10 relative">
        <div className="flex flex-row items-center absolute">
          <div className="flex flex-col gap-5">
            <h1 className="font-extrabold text-6xl">Why join us</h1>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-2 items-center">
                <Check size={20} color="#00ff00" strokeWidth={2} />
                <p>Est et in pharetra magna adipiscing ornare aliquam.</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Check size={20} color="#00ff00" strokeWidth={2} />
                <p>Est et in pharetra magna adipiscing ornare aliquam.</p>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <Check size={20} color="#00ff00" strokeWidth={2} />
                <p>Est et in pharetra magna adipiscing ornare aliquam.</p>
              </div>
            </div>
            <div className="border-2 border-[#78350F] rounded-[8px] p-3 w-44 text-center">
              <Link className="text-[#78350F]">Sign up now</Link>
            </div>
          </div>
          <div className="relative z-10">
            <img src={video} alt="placeholder" />
          </div>
        </div>
        <div className="flex h-96 w-[120%]  relative">
          <div className=" bg-[#BE185D] opacity-75 w-60 h-60 rounded-[50px] relative top-[14rem] left-[56rem]"></div>
          <div className=" bg-[#0369A1] opacity-75 w-20 h-20 rounded-[100px] relative z-20 -top-28 left-[40rem]"></div>
          <div className=" bg-[#B45309] w-32 h-32 rounded-[50px] relative top-5 left-10"></div>
          <div className=" bg-[#A21CAF] opacity-75 w-32 h-32 rounded-[50px] relative top-72 -right-[24rem]"></div>
          <div className=" bg-[#FDE68A] w-[45rem] h-40 -rotate-45 relative top-28 right-[15rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default JoinUsSection;
