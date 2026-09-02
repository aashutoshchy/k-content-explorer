import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MediaCard from "../components/MediaCard";
import { getKoreanSearchResults } from "../api/tmdb";

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

  if (loading) return <div>Loading...</div>;

  console.log("Total results", results);

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
