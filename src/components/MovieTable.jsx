import React from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

const MovieTable = (props) => {
  var tableColumns = [
    { title: "Title", name: "title" },
    { title: "Genre", name: "genre.name", subName: "name" },
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
            onSort={onSort}
            onChangeGenre={onChangeGenre}
            currentGenre={currentGenre}
          />
        </thead>
        <tbody>
          <TableBody
            columns={tableColumns}
            data={currentMovies}
            onLike={onLike}
            onDelete={onDeleteMovieList}
          />
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
