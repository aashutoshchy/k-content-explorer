import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../api/tmdb";
import Button from "../components/Button";

function DetailPage() {
  const { mediaType, id } = useParams();
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetails(mediaType, id).then((detail) => {
      setDetail(detail);
      setLoading(false);
    });
  }, []);

  console.log(detail);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <div className="relative w-full h-[70vh]">
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-white-80/10"></div>
        <img
          src={`https://image.tmdb.org/t/p/original/${detail.backdrop_path}`}
          alt=""
          className="inset-0 h-full w-full object-cover"
        />
        <div className="absolute bottom-10 w-full flex flex-col md:flex-row  items-center justify-between gap-10 px-10 md:px-30">
          <img
            src={`https://image.tmdb.org/t/p/original/${detail.poster_path}`}
            alt="Poster Image"
            className="h-[250px] md:h-[350px] border-4 border-accent"
          />
          <div className="w-full text-white flex flex-col gap-4">
            <h1 className="font-bold text-4xl font-serif">
              {detail.name || detail.title}
            </h1>
            <div className="flex justify-between lg:justify-start lg:gap-4">
              <p>⭐{detail.vote_average}/ 10</p>
              <p className="space-x-2">
                <i className="fa-solid fa-calendar-days text-accent"></i>
                <span>{detail.release_date || detail.first_air_date}</span>
              </p>
              <p>
                <i className="fa-regular fa-clock text-accent"></i>
                <span>
                  {detail.episode_run_time?.[0] || detail.runtime} min
                </span>
              </p>
            </div>
            <p className="line-clamp-3">{detail.tagline}</p>
            <div className="flex gap-4">
              {detail.genres.map((genre) => (
                <p
                  key={genre.id}
                  className="bg-secondary text-black text-xs font-semibold px-6 py-2 rounded-4xl"
                >
                  {genre.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 md:px-30">
        <h2 className="font-serif text-2xl font-bold">Overview</h2>
        <p>{detail.overview}</p>
      </div>
    </div>
  );
}

export default DetailPage;
