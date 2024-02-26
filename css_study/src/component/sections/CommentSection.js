import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React, { useRef } from "react";
import companyImg from "../../assets/image/Logo-grey.png";
import user from "../../assets/image/User Thumb.png";
import CommentBox from "./CommentBox";

const CommentSection = () => {
  const containerRef = useRef(null);

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-[#FFFBEB] w-full flex flex-col items-center justify-center gap-5 py-10 relative">
      <div className="flex bg-[#FDE68A] overflow-hidden w-full h-[20rem] absolute"></div>
      <div className="flex flex-row w-full justify-between items-center px-20">
        <h1 className="font-extrabold text-6xl">Because they love us</h1>
        <div className="flex flex-row gap-2">
          <button onClick={scrollLeft}>
            <ArrowLeftCircle size={32} />
          </button>
          <button onClick={scrollRight}>
            <ArrowRightCircle size={32} />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        className="w-full h-[30rem] relative overflow-x-hidden"
      >
        <div className="flex flex-row absolute top-20 gap-5 ">
          <CommentBox
            image={companyImg}
            comment="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
            person={user}
          />
          <CommentBox
            image={companyImg}
            comment="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
            person={user}
          />
          <CommentBox
            image={companyImg}
            comment="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
            person={user}
          />
          <CommentBox
            image={companyImg}
            comment="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
            person={user}
          />
          <CommentBox
            image={companyImg}
            comment="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
            person={user}
          />
          <CommentBox
            image={companyImg}
            comment="Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla."
            person={user}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
