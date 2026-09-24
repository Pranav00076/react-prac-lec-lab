import React, { useState } from 'react';

export default function StarRating({ maxStars }) {
  const [rating, setRating] = useState(5);
  let stars = []
    
    let i = 1
    while (i <= rating) {
        let idx = i
    stars.push(
        <span
              key={i}
              onClick={() => {
                setRating(idx)

              }}
              style={{
                fontSize: '2rem',
                color: 'gold',
              }}
            >
              ★
        </span>
    )
    i++
  }

    while (i <= maxStars) {
        let idx = i
    stars.push(
        <span
              key={i}
              onClick={() => {
                setRating(idx)

              }}
              style={{
                fontSize: '2rem',
                color: 'lightgrey',
              }}
            >
              ★
        </span>
    )
    i++
  }

  return (
    <div>
      <div style={{ display: 'flex', gap: '5px', cursor: 'pointer' }}>
        {stars}
      </div>

      <p style={{ fontSize: '1.2rem' }}>
        You rated: {rating} out of {maxStars}
      </p>
    </div>
  );
}