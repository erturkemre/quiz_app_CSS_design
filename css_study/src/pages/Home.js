import React from "react";
import CollectibleSection from "../component/sections/CollectibleSection";
import BestSection from "../component/sections/BestSection";
import JoinUsSection from "../component/sections/JoinUsSection";
import CommentSection from "../component/sections/CommentSection";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-around ">
            <CollectibleSection />
            <BestSection />
            <JoinUsSection />
            <CommentSection />

        </div>
    );
}

export default Home;