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
    <div>
      <h2>Search results for {query}</h2>
      <div className="grid grid-cols-4">
        {results.map((result) => (
          <div key={result.id} className="h-[300px] w-[300px]">
            <MediaCard
              posterPath={result.poster_path}
              title={result.name || result.title}
              releaseDate={result.release_date}
              rating={result.vote_average}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
