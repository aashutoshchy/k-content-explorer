import React from "react";
import { getYear } from "../utils/getYear";

function MediaCard({ posterPath, title, releaseDate, rating }) {
  return (
    <div className="w-full flex flex-col overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt="Poster Image"
        className="w-full aspect-[2/3] object-cover"
      />
      <div className="px-2 py-2">
        <p className="font-semibold text-xl line-clamp-1">{title}</p>
        <div className="flex justify-between">
          <p>{getYear(releaseDate)}</p>
          <p>⭐{rating}</p>
        </div>
      </div>
    </div>
  );
}

export default MediaCard;
