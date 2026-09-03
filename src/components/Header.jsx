import React, { useState } from "react";
import logo from "../assets/logo.png";
import { getKoreanSearchResults } from "../api/tmdb";
import { useNavigate } from "react-router-dom";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const searchQuery = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery === "") {
      setQuery("");
      return;
    }
    navigate(`/search?query=${encodeURIComponent(trimmedQuery)}`);
    setQuery("");
  };

  return (
    <header>
      <nav className="h-15 w-full px-2 lg:px-10  bg-accent flex items-center justify-between gap-10">
        <div className="logo h-1/2">
          <img
            src={logo}
            alt="logo"
            onClick={() => navigate("/")}
            className="h-full w-full cursor-pointer"
          />
        </div>
        <div className="w-full h-[60%] relative max-w-[605px] rounded-4xl border-2 bg-white border-secondary flex items-center overflow-hidden">
          <input
            type="text"
            placeholder="Search Tv or Movies"
            className="flex-1 px-4 outline-none font-semibold text-sm placeholder:font-medium"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            onClick={searchQuery}
            className="bg-secondary h-full w-[85px] font-semibold cursor-pointer"
          >
            Search
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
