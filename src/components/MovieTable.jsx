import React from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";

const MovieTable = (props) => {
  var tableColumns = [
    { title: "Title", name: "title" },
    { title: "Genre", name: "genre.name" },
    { title: "Stock", name: "numberInStock" },
    { title: "Rate", name: "dailyRentalRate" },
    { title: "", name: "like" },
    { title: "", name: "delete" },
  ];
  var {
    movies,
    currentPage,
    pageSize,
    onDeleteMovieList,
    onLike,
    onSort,
    onChangeGenre,
    currentGenre,
  } = props;
  const indexOfLastMovie = currentPage * pageSize;
  const indexOfFirstMovie = indexOfLastMovie - pageSize;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div>
      <table className={movies.length > 0 ? "table" : "d-none"}>
        <thead>
          <TableHeader
            columns={tableColumns}
            data={movies}
            onChangeGenre={onChangeGenre}
            currentGenre={currentGenre}
            onSort={onSort}
          />
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
