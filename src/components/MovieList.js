import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, onMovieClick }) => {
  if (!movies || movies.length === 0) {
    return (
      <p className="empty-state">
        No movies match your filters yet. Try lowering the rating or changing
        the title.
      </p>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onClick={onMovieClick ? () => onMovieClick(movie) : undefined}
        />
      ))}
    </div>
  );
};

export default MovieList;
