import React, { useState } from "react";
import "./App.css";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";
import MovieModal from "./components/MovieModal";

const initialMovies = [
  {
    id: 1,
    title: "Stranger Things",
    description:
      "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfLqWDO3ftXtuUdiRUoEV1yIn-StEcFku3r1YEZ-hMQYH9feL_q_PKsh9amKUPRSx0AhZ1A&s=10",
    rating: 5,
  },
  {
    id: 2,
    title: "The Abandons",
    description:
      "In 1850s Washington, two families led by powerful matriarchs — one wealthy, one poor but deeply loyal — battle for supremacy on the lawless frontier.",
    posterURL:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQbWDjn-IE7eNh04Hggi2HFmbMvKiVA-5VbZzlPMGcdx7qgNkte",
    rating: 4,
  },
  {
    id: 3,
      title: "Frankenstein",
      description:
        "Oscar winner Guillermo del Toro reimagines Mary Shelley's classic tale of a brilliant scientist and the creature his monstrous ambition brings to life.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxO7s3PhAkunVV3LoyDia8EJ6Woq5jGmY-YFYYK7TrRXCOktsrThTGr9W0wuNC-ry7XyXpVg&s=10",
      rating: 5,
    },

  {
    id: 4,
      title: "Wednesday",
      description:
        "Smart, sarcastic and a little dead inside, Wednesday Addams investigates twisted mysteries while making new friends — and foes — at Nevermore Academy.",
      posterURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKDOhOKsrp9aPcrtjdZbFkFtltZZfB_Nsq3oSmJVlSz7DFD7dNxsUl15UkYZv0maX96pv&s=10",
      rating: 4,
    },

   {
    id: 5,
      title: "The Night My Dad Saved Christmas 2",
      description:
        "When the sneaky director of a toy company kidnaps Santa, it's up to a father and son to rescue him and save Christmas from disaster.",
      posterURL:
        "https://occ-0-8407-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXxAHg1hgrhWbRSN2o8hSdldgsIlzp5zR8WoQuF-1-i8xfplVUN-KoWWQ5XvtpZ_9lurwcvF25TFmVMQkfrW9oAgx_gaEMNQUiTR.jpg?r=8ea",
      rating: 3,
    },

  {
    id: 6,
    title: "Jay Kelly",
    description:
      "Movie star Jay Kelly confronts his past and present on a journey through Europe with his devoted manager in this film from Oscar nominee Noah Baumbach.",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2qkrReR8eyRLLNHWJuStOcGCXS6UboJPQ_ZUz8g3Lu6Tc49JHJXNhq3kMOhMPBPWUwhzojg&s=10",
    rating: 5,
  },
  {
    id: 7,
    title: "Havoc",
    description:
      "When a drug heist swerves lethally out of control, a jaded cop fights his way through a corrupt city's criminal underworld to save a politician's son.",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDXq5mx66yioKLVZZReGrh4P4YP6Nkpa04mJnjzdrKWj985n2KdOrQ7yv84lcs4vt60MSkcg50wjUUdPLalJoarqrTbGO5gzP_UnBzvw&s=10",
    rating: 5,
  },
  {
    id: 8,
    title: "Squid Game",
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    posterURL:
      "https://m.media-amazon.com/images/M/MV5BZDEwZDYzZDMtZjg0Yi00OTk3LWE4N2EtMTkzMmYyZTFhYmJkXkEyXkFqcGc@._V1_QL75_UX500_CR0,0,500,281_.jpg",
    rating: 4,
  },
  {
    id: 9,
    title: "Lupin",
    description:
      "Inspired by the adventures of Arsène Lupin, gentleman thief Assane Diop sets out to avenge his father for an injustice inflicted by a wealthy family.",
    posterURL:
      "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABfcangbkpw_zf-YFwdj8hUz0QylkU4YJ--CattNtAC26B4Z57cNFvp9lk5qzHXuON_BWNUcSTLLrFY_ZnSgZGRi41nhmpttE898DTdipGNNH8MT5vy3rGdaD0STNEcjr07zlbw.webp?r=0e0",
    rating: 5,
  },
  {
    id: 10,
    title: "No Time to Die",
    description:
      "After leaving the active services, James Bond leads a peaceful life in Jamaica. However, a call for help from an old friend triggers a confrontation with a treacherous enemy.",
    posterURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc7ssFT_S1H_U4_4WaUlBRNk6atWDYW9-BzDYY5JaopYPvLs0wvAQreo08HJ1pw65i7LAJZg&s=10",
    rating: 4,
  },
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleAddMovie = (movie) => {
    const newMovie = {
      ...movie,
      id: Date.now(),
    };
    setMovies((prev) => [newMovie, ...prev]);
  };

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());
    const matchesRating = movie.rating >= ratingFilter;
    return matchesTitle && matchesRating;
  });

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="nav">
        <div className="nav__logo">
          <span className="nav__logo-main">Net</span>
          <span className="nav__logo-sub">Flix</span>
        </div>

        <nav className="nav__links">
          <a href="#home">Home</a>
          <a href="#movies">Movies</a>
          <a href="#about">About</a>
        </nav>

        <button className="nav__cta">Sign In</button>
      </header>

      <main>
        {/* HERO WITH MY TRAILER */}
        <section className="hero" id="home">
          <div className="hero-video-wrapper">
<video
  className="hero-video"
  src="/netflix-intro-iyed-v1.mp4"
  autoPlay
  muted
  loop
  playsInline
/>

          </div>

          <div className="hero-overlay" />

          <div className="hero-content">
            <h1>Unlimited Movies &amp; TV shows and more.</h1>
            <p>Starts at USD 3.99. Cancel anytime..</p>
          </div>
        </section>

        {/* BROWSE COLLECTION */}
        <section className="collection-section" id="movies">
          <div className="collection-header">
            <h2>Browse Collection</h2>
            <p className="collection-subtitle">
              Search the library, filter by rating and add your own favorites.
            </p>
          </div>

          <div className="collection-toolbar">
            <Filter
              titleFilter={titleFilter}
              setTitleFilter={setTitleFilter}
              ratingFilter={ratingFilter}
              setRatingFilter={setRatingFilter}
            />
          </div>

          <div className="collection-grid">
            <div className="collection-grid-main">
              <MovieList
                movies={filteredMovies}
                onMovieClick={handleMovieClick}
              />
            </div>

            <div className="collection-grid-side">
              <AddMovie onAddMovie={handleAddMovie} />
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer" id="about">
          <div className="footer__columns">
            <div>
              <h3>About Netflix</h3>
              <p>
                Netflix has an extensive library of feature films, documentaries,
                TV shows, anime, award-winning originals, and more.
              </p>
            </div>
            <div>
              <h3>Tech stack</h3>
              <p>React + Hooks</p>
              <p>Component composition</p>
              <p>Responsive layout</p>
            </div>
            <div>
              <h3>Questions? Contact us.</h3>
              <p>FAQ · Cookie Preferences · Help Center</p>
            </div>
          </div>
          <p className="footer__copyright">
            © 2025 Netflix.
          </p>
        </footer>
      </main>

      {/* MODAL WHEN CLICKING A CARD */}
      <MovieModal movie={selectedMovie} onClose={handleCloseModal} />
    </div>
  );
}

export default App;
