import React from "react";

const Filter = ({
  titleFilter,
  setTitleFilter,
  ratingFilter,
  setRatingFilter,
}) => {
  const handleStarClick = (value) => {
    setRatingFilter((prev) => (prev === value ? 0 : value));
  };

  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="Search by title..."
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
      />

      <div className="rating-filter">
        <span className="rating-filter__label">Min rating:</span>
        {stars.map((star) => (
          <button
            key={star}
            type="button"
            className={
              star <= ratingFilter
                ? "rating-filter__star rating-filter__star--active"
                : "rating-filter__star"
            }
            onClick={() => handleStarClick(star)}
          >
            ★
          </button>
        ))}
        <button
          type="button"
          className="rating-filter__clear"
          onClick={() => setRatingFilter(0)}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default Filter;
