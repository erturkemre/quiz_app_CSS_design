import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Youtube } from "lucide-react";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";
import appStore from "../../assets/icons/App Store - Filled.png";
import playStore from "../../assets/icons/Google Play.png";



const FooterColumns = () => {
  return (
    <div className="flex flex-row border-b-2 border-white py-12">
      <div className="flex flex-col basis-1/4 gap-2">
        <h1 className="font-medium">Product</h1>
        <Link>Pricing</Link>
        <Link>Overview</Link>
        <Link>Browse</Link>
        <Link>Accessibility</Link>
        <Link>Five</Link>
      </div>
      <div className="flex flex-col basis-1/4 gap-2">
        <h1 className="font-medium">Solutions</h1>
        <Link>Brainstorming</Link>
        <Link>Ideation</Link>
        <Link>Wireframing</Link>
        <Link>Research</Link>
        <Link>Design</Link>
      </div>
      <div className="flex flex-col basis-1/4 gap-2">
        <h1 className="font-medium w-fit">Support</h1>
        <Link>Contact Us</Link>
        <Link>Developers</Link>
        <Link>Documentation</Link>
        <Link>Integrations</Link>
        <Link>Reports</Link>
      </div>
      <div className="flex flex-col basis-1/4 gap-4">
        <h1 className="font-medium">Get the App</h1>
        <div className="flex flex-col gap-2 w-fit">
            <Link ><img src={appStore} /></Link>
            <Link><img src={playStore} /></Link>
        </div>
        <div className="flex flex-col gap-2">
            <p>Follow Us</p>
            <div className="flex flex-row gap-2">
                <Link ><Youtube /></Link>
                <Link><img src={facebook} /></Link>
                <Link><Twitter className="" /></Link>
                <Link><img src={instagram} /></Link>
                <Link><img src={linkedin} /></Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default FooterColumns;
