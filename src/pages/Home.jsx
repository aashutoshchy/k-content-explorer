import React, { useEffect, useState } from "react";
import { getKoreanTrending } from "../api/tmdb";
import HeroBanner from "../components/HeroBanner";

function Home() {
  const [trending, setTrending] = useState([]);
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getKoreanTrending().then((result) => {
      setTrending(result);
      const randomIdx = Math.floor(Math.random() * result.length);
      setFeatured(result[randomIdx]);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <HeroBanner featured={featured} />
    </div>
  );
}

export default Home;
