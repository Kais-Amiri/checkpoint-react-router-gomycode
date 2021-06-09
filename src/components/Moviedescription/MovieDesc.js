import React, { useEffect, useState } from "react";

export const MovieDesc = ({ match, moviesList }) => {
  const [movie, setMovie] = useState({});

  useEffect(
    () => setMovie(moviesList.find((el) => el.id === +match.params.movieId)),
    [moviesList, match.params.movieId]
  );
  return (
    <div>
      <div>
        <h1>{movie.name}</h1>
        <img src={movie.image} alt={movie.name} />
        <p>{movie.description}</p>
      </div>
    </div>
  );
};
