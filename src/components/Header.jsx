import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <nav className="h-15 w-full px-10  bg-accent flex items-center justify-between gap-10">
        <div className="logo h-1/2">
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
        <div className="w-full h-[60%] relative max-w-[605px] rounded-4xl border-2 bg-white border-secondary flex items-center overflow-hidden">
          <input
            type="text"
            placeholder="Search Tv or Movies"
            className="flex-1 outline-none px-4"
          />
          <button className="bg-secondary h-full w-[85px] font-semibold">
            Search
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
