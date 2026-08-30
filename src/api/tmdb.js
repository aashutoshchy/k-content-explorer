const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getKoreanTrending = async () => {
  const response = await fetch(
    `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  );
  const data = await response.json();
  const koreanResults = data.results.filter(
    (result) => result.original_language === "ko",
  );
  return koreanResults;
};

export const getKoreanSearchResults = async (query) => {
  const page1 = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=1`,
  ).then((r) => r.json());
  const page2 = await fetch(
    `${BASE_URL}/search/multi?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=2`,
  ).then((r) => r.json());
  const combined = [...page1.results, ...page2.results];
  return combined.filter((result) => result.original_language === "ko");
};

export const getDetails = async (type, id) => {
  const response = await fetch(
    `${BASE_URL}/${type}/${id}?append_to_response=credits?api_key=${API_KEY}`,
  );
  return response.json();
};
