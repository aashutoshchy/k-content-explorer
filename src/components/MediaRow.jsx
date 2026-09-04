import React, { useEffect } from "react";
import MediaCard from "./MediaCard";

function MediaRow({ row, text }) {
  useEffect;

  return (
    <div className="lg:px-10 px-4 py-4">
      <h2 className="text-xl font-serif font-bold pb-4">{text}</h2>
      <div className="w-full flex flex-wrap overflow-x-scroll gap-6">
        {row.map((result) => (
          <div
            key={result.id}
            className="w-full md:h-[400px] md:w-[220px] bg-accent rounded-2xl overflow-hidden"
          >
            <MediaCard
              posterPath={result.poster_path}
              title={result.name || result.title}
              releaseDate={result.release_date || result.first_air_date}
              rating={result.vote_average}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MediaRow;
