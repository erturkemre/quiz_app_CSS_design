import React from "react";
import CollectibleSection from "../component/sections/CollectibleSection";
import BestSection from "../component/sections/BestSection";
import JoinUsSection from "../component/sections/JoinUsSection";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-around ">
            <CollectibleSection />
            <BestSection />
            <JoinUsSection />


        </div>
    );
}

export default Home;