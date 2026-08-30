import React from "react";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <nav className="h-20 w-full px-10 bg-accent flex items-center justify-between">
        <div className="logo h-1/2">
          <img src={logo} alt="logo" className="h-full w-full" />
        </div>
        <div className="w-full h-1/2 max-w-[695px] rounded-4xl border flex overflow-hidden">
          <input type="text" className="flex-1 outline-none px-4" />
          <button className="bg-secondary h-full w-[115px]">Search</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
