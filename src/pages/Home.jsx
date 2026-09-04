import React, { useEffect, useState } from "react";
import { getKoreanTrending } from "../api/tmdb";
import HeroBanner from "../components/HeroBanner";
import MediaRow from "../components/MediaRow";

function Home() {
  const [seeMore, setSeeMore] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getKoreanTrending().then((result) => {
      setSeeMore(result);
      const randomIdx = Math.floor(Math.random() * result.length);
      setFeatured(result[randomIdx]);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <HeroBanner featured={featured} />
      <MediaRow row={seeMore} text={"See More"} />
    </div>
  );
}

export default Home;
