const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getKoreanTrending = async () => {
  const [moviesRes, tvRes] = await Promise.all([
    fetch(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_original_language=ko&sort_by=popularity.desc`,
    ).then((res) => res.json()),
    fetch(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_original_language=ko&sort_by=popularity.desc`,
    ).then((res) => res.json()),
  ]);

  return [...moviesRes.results, ...tvRes.results];
};

// export const getKoreanTrending = async () => {
//   const pageNumbers = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//   ];

//   const pages = await Promise.all(
//     pageNumbers.map((page) =>
//       fetch(
//         `${BASE_URL}/trending/all/day?api_key=${API_KEY}&page=${page}`,
//       ).then((res) => res.json()),
//     ),
//   );

//   const combined = pages.flatMap((page) => page.results);
//   const koreanResults = combined.filter(
//     (result) => result.original_language === "ko",
//   );

//   return koreanResults;
// };

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
    `${BASE_URL}/${type}/${id}?append_to_response=credits&api_key=${API_KEY}`,
  );
  return response.json();
};
