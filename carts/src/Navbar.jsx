import React from "react";
import logo from "../src/assets/imgs/logo.png";
import search from "../src/assets/svgs/search.svg";
import personal from "../src/assets/svgs/personal.svg";
import star from "../src/assets/svgs/star.svg";
import bag from "../src/assets/svgs/bag.svg";


const Navbar = () => {
  return (
    <>
      <header className="header p-[30px] ">
        <div className="container flex items-center justify-between">
          <img src={logo} alt="" />
          <div className="navabr_links flex items-center gap-[30px] max-[870px]:hidden">
            <p className="font-[400] text-[16px] text-[#484848]">Home</p>
            <p className="font-[400] text-[16px] text-[#484848]">Shop</p>
            <p className="font-[400] text-[16px] text-[#484848]">Products</p>
            <p className="font-[400] text-[16px] text-[#484848]">Pages</p>
          </div>

          <div className="navbar_icons flex items-center gap-[30px] max-[480px]:hidden">
            <img src={search} alt="" />
            <img src={personal} alt="" />
            <img src={star} alt="" />
            <img src={bag} alt="" />

          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
