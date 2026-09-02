import React from "react";

function MediaCard({ posterPath, title, releaseDate, rating }) {
  return (
    <div className="bg-accent w-full h-full">
      <img
        src={`https://image.tmdb.org/t/p/original/${posterPath}`}
        alt="Poster Image"
        className="aspect-[3/4] h-[200px]"
      />
      <div>
        <p>{title}</p>
      </div>
      <div className="flex">
        <p>{releaseDate}</p>
        <p>⭐{rating}</p>
      </div>
    </div>
  );
}

export default MediaCard;
