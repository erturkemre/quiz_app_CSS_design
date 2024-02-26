import { Globe } from "lucide-react";
import React from "react";

const FooterBottom = () => {
  return (
    <div className="flex flex-row justify-between items-center h-24">
      <div>
        <p>Collers @ 2023. All rights reserved</p>
      </div>
      <div className="flex flex-row gap-3">
        <p>Privacy</p>
        <p>Terms</p>
        <p>Contact</p>
        <div className="flex flex-row gap-1">
            <Globe />
          <p>EN</p>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
