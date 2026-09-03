import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import { getKoreanSearchResults } from "../api/tmdb";
import { ThreeDot } from "react-loading-indicators";

function SearchPage() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getKoreanSearchResults(query).then((result) => {
      setResults(result);
      console.log(result);
      setLoading(false);
    });
  }, [query]);

  if (loading) {
    return (
      <div className="h-[90vh] w-full flex items-center justify-center">
        <ThreeDot color="#d9a299" size="medium" text="" textColor="" />
      </div>
    );
  }

  if (results.length === 0)
    return (
      <h2 className="px-4 lg:px-10 my-4">
        No Result found for <b>{query.toUpperCase()}</b>
      </h2>
    );

  return (
    <div className="px-4 lg:px-10">
      <h2 className="my-4">
        Search results for <b>{query.toUpperCase()}</b>
      </h2>
      <div className="flex justify-center md:justify-start flex-wrap gap-4">
        {results.map((result) => (
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

export default SearchPage;
