import React from "react";

function HeroBanner({ featured }) {
  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/original/${featured.backdrop_path}`}
        alt="Banner Image"
        className="w-full h-full object-cover"
      />
      <div className="absolute w-1/2 px-10 inset-0 flex flex-col justify-center text-white">
        <h1 className="font-bold text-4xl font-serif">
          {featured.name || featured.title}
        </h1>
        <p>{featured.overview}</p>
      </div>
    </div>
  );
}

export default HeroBanner;
