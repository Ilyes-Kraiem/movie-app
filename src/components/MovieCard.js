import React from "react";
const MovieCard = ({ movie, onClick }) => {
  const filledStars = Math.round(movie.rating);

  return (
    <article className="movie-card" onClick={onClick}>
      <div className="movie-card__poster-wrapper">
        <img
          src={movie.posterURL}
          alt={movie.title}
          className="movie-card__poster"
        />
      </div>

      <div className="movie-card__body">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__description">{movie.description}</p>

        <div className="movie-card__footer">
          <div className="movie-card__rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={
                  index < filledStars
                    ? "movie-card__star movie-card__star--filled"
                    : "movie-card__star"
                }
              >
                ★
              </span>
            ))}
          </div>
          <span className="movie-card__rating-value">
            {movie.rating} / 5
          </span>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
