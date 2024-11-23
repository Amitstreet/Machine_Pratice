import React, { useState } from "react";

const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => setRating(index + 1)}
          onMouseEnter={() => setHover(index + 1)}
          onMouseLeave={() => setHover(0)}
          style={{
            cursor: "pointer",
            color: index < (hover || rating) ? "gold" : "gray",
            fontSize: "24px",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h1>Rate this product:</h1>
      <StarRating totalStars={5} />
    </div>
  );
};

export default App;
