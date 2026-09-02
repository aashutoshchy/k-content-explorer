import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function HeroBanner({ featured }) {
  console.log(featured);

  const navigate = useNavigate();

  const mediaType = featured.first_air_date ? "tv" : "movie";

  const seeDetails = () => {
    navigate(`/${mediaType}/${featured.id}`);
  };

  return (
    <div className="relative w-full h-[550px] overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-white-50/10"></div>
      <img
        src={`https://image.tmdb.org/t/p/original/${featured.backdrop_path}`}
        alt="Banner Image"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute lg:w-1/2 px-4 lg:px-10 inset-0 flex flex-col justify-center gap-4 text-white">
        <h1 className="font-bold text-4xl font-serif">
          {featured.name || featured.title}
        </h1>
        <div>⭐ {featured.vote_average} / 10</div>
        <p className="line-clamp-3">{featured.overview}</p>
        <div className="w-full space-x-5 space-y-2">
          <Button
            onClick={seeDetails}
            text={"See Details"}
            icon={"circle-info"}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
