import React from "react";

function CastCard({ actor, character, imgSrc }) {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center">
      <img
        src={`https://image.tmdb.org/t/p/w500/${imgSrc}`}
        alt="Actor Photo"
        className="w-full max-w-[150px] aspect-square object-cover rounded-full mb-2"
      />
      <h3 className="font-bold text-sm">{actor}</h3>
      <h4 className="text-black/80 text-xs">{character}</h4>
    </div>
  );
}

export default CastCard;
