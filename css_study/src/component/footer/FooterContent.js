import React from "react";
import FooterColumns from "./FooterColumns";
import FooterBottom from "./FooterBottom";

const FooterContent = () => {
    return (
        <footer className=" flex flex-col px-10 text-white">
            <FooterColumns />
            <FooterBottom />
        </footer>
    );
}

export default FooterContent;