import React from "react";
import Like from "./common/Like";

const MovieTable = (props) => {
  var { movies, currentPage, pageSize, onDeleteMovieList, onLike } = props;
  const indexOfLastMovie = currentPage * pageSize;
  const indexOfFirstMovie = indexOfLastMovie - pageSize;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);
  return (
    <div>
      <table className={movies.length > 0 ? "table" : "d-none"}>
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Genre</th>
            <th scope="col">Stock</th>
            <th scope="col">Rate</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {currentMovies.map((movie) => (
            <tr key={movie._id}>
              <th>{movie.title}</th>
              <th>{movie.genre.name}</th>
              <th>{movie.numberInStock}</th>
              <th>{movie.dailyRentalRate}</th>
              <th>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </th>
              <th>
                <button
                  onClick={() => onDeleteMovieList(movie._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
