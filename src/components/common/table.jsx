import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  var {
    data,
    currentData,
    tableColumns,
    onSort,
    onChangeGenre,
    currentGenre,
    onLike,
    onDeleteMovieList,
  } = props;
  return (
    <table className={data.length > 0 ? "table" : "d-none"}>
      <thead>
        <TableHeader
          columns={tableColumns}
          data={data}
          onSort={onSort}
          onChangeGenre={onChangeGenre}
          currentGenre={currentGenre}
        />
      </thead>
      <tbody>
        <TableBody
          columns={tableColumns}
          data={currentData}
          onLike={onLike}
          onDelete={onDeleteMovieList}
        />
      </tbody>
    </table>
  );
};

export default Table;
