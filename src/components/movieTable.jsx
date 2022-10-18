import React from "react";
import Table from "./common/table";

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
      <Table
        data={movies}
        currentData={currentMovies}
        tableColumns={tableColumns}
        onSort={onSort}
        onChangeGenre={onChangeGenre}
        currentGenre={currentGenre}
        onLike={onLike}
        onDeleteMovieList={onDeleteMovieList}
      />
    </div>
  );
};

export default MovieTable;
