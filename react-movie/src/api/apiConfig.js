const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "990a46995e6e87a13eaa91790d03abff",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
  movieCategory: "movie",
  tvCategory: "tv",
};

export default apiConfig;
