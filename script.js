const API_KEY = "YOUR_TMDB_API_KEY";
const BASE_URL = "https://api.themoviedb.org/3";
const IMG_PATH = "https://image.tmdb.org/t/p/w500";

const container = document.getElementById("movie-container");
const search = document.getElementById("search");

async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

function showMovies(movies) {
  container.innerHTML = "";
  movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie");
    card.innerHTML = `
      <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
      <h3>${movie.title}</h3>
    `;
    container.appendChild(card);
  });
}

getMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);

search.addEventListener("keyup", e => {
  if (e.target.value.trim() !== "") {
    getMovies(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${e.target.value}`);
  } else {
    getMovies(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  }
});
