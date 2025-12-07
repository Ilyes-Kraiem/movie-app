import React from "react";
const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return (
    <div className="movie-modal-backdrop" onClick={onClose}>
      <div
        className="movie-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="movie-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="movie-modal-poster">
          <img src={movie.posterURL} alt={movie.title} />
        </div>

        <div className="movie-modal-content">
          <h2>{movie.title}</h2>

          <div className="movie-modal-tags">
            
            <span className="tag">2025</span>
            <span className="tag">16+</span>
            <span className="tag">Show</span>
            <span className="tag">Drama</span>
          </div>

          <p className="movie-modal-description">
            {movie.description}
          </p>

          <div className="movie-modal-rating">
            Rating: {movie.rating} / 5
          </div>

          <button className="movie-modal-cta">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
