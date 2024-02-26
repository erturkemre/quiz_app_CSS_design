import React from "react";
import Header from "./Header";
import PageContent from "./PageContent";
import Footer from "./Footer";

const Main = () => {
    return (
        <div className="flex flex-col bg-white w-[100%] h-[100%] ">
            <Header />
            <PageContent />
            <Footer />
        </div>
    );
}

export default Main;