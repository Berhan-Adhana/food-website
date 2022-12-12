import React, { useState } from "react";
import "./rating.css";

const Rating = ({ secondary, rate }) => {
  const [rating, setRating] = useState(rate);
  const [hover, setHover] = useState(0);
  const on = secondary ? "secondary-on" : "primary-on";
  const off = secondary ? "secondary-off" : "primary-off";
  return (
    <div className="rating__container">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            className={index <= (hover || rating) ? on : off}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            {/* <span className={secondary ? "secondary-star" : "primary-star"}> */}
            <span className="star">&#9733;</span>
          </button>
        );
      })}
    </div>
  );
};
// Rating.defaultProps = {
//   rate: 0,
// };

export default Rating;
