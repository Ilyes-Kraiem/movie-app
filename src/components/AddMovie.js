import React, { useState } from "react";

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const numericRating = parseFloat(rating);
    if (!title || !description || !posterURL || isNaN(numericRating)) {
      alert("Please fill all fields and provide a rating between 0 and 5.");
      return;
    }

    if (numericRating < 0 || numericRating > 5) {
      alert("Rating must be between 0 and 5.");
      return;
    }

    onAddMovie({
      title,
      description,
      posterURL,
      rating: numericRating,
    });

    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating("");
  };

  return (
    <div className="add-movie-card">
      <h3>Add a new movie</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Poster URL"
          value={posterURL}
          onChange={(e) => setPosterURL(e.target.value)}
        />

        <input
          type="number"
          placeholder="Rating (0–5)"
          value={rating}
          min="0"
          max="5"
          step="0.5"
          onChange={(e) => setRating(e.target.value)}
        />

        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;
