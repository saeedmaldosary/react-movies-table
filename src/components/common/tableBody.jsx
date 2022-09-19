import React, { Component } from "react";
import Like from "./like";

class TableBody extends Component {
  render() {
    var { data, columns } = this.props;
    return (
      <React.Fragment>
        {data.map((d) => (
          <tr key={d._id}>{columns.map((c) => this.renderCell(c, d))}</tr>
        ))}
      </React.Fragment>
    );
  }

  renderCell = (column, data) => {
    var { onLike, onDelete } = this.props;
    var key = this.createKey(data, column);

    if (column.name.includes(".")) {
      return (
        <td key={key}>{data[column.name.split(".")[0]][column.subName]}</td>
      );
    } else if (column.name === "like") {
      return (
        <td key={key}>
          <Like liked={data.liked} onClick={() => onLike(data)} />
        </td>
      );
    } else if (column.name === "delete") {
      return (
        <td key={key}>
          <button
            onClick={() => onDelete(data._id)}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </td>
      );
    } else {
      return <td key={key}>{data[column.name]}</td>;
    }
  };

  createKey = (item, column) => {
    return item._id + column.name;
  };
}

export default TableBody;
