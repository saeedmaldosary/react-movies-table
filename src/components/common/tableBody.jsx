import React, { Component } from "react";
import Like from "./like";

class TableBody extends Component {
  render() {
    var { data, columns, onLike, onDelete } = this.props;
    return (
      <React.Fragment>
        {data.map((d) => (
          <tr key={d._id}>
            {columns.map((c) => this.renderCell(c, d))}
            <td>
              <Like liked={d.liked} onClick={() => onLike(d)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(d._id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </React.Fragment>
    );
  }

  renderCell = (column, data) => {
    if (column.name.includes(".")) {
      return (
        <td key={this.createKey(data, column)}>
          {data[column.name.split(".")[0]][column.subName]}
        </td>
      );
    } else {
      return <td key={this.createKey(data, column)}>{data[column.name]}</td>;
    }
  };

  createKey = (item, column) => {
    return item._id + column.name;
  };
}

export default TableBody;
