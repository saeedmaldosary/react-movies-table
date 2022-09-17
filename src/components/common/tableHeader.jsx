import React, { Component } from "react";

class TableHeader extends Component {
  state = {
    orderDesc: false,
    sortedTitle: "",
  };
  render() {
    var { columns } = this.props;
    return (
      <tr>
        {columns.map((c) => (
          <th key={c.name} onClick={() => this.handleSort(c.name)}>
            {c.title}
          </th>
        ))}
      </tr>
    );
  }

  handleSort = (title) => {
    var { orderDesc, sortedTitle } = this.state;
    var { data, currentGenre, onChangeGenre, onSort } = this.props;
    if (title === sortedTitle && orderDesc) {
      onSort(data.reverse());
      this.setState({
        orderDesc: false,
        sortedTitle: title,
      });
    } else {
      onChangeGenre(currentGenre);

      var sort = function (prop, arr) {
        prop = prop.split(".");
        var len = prop.length;

        arr.sort(function (a, b) {
          var i = 0;
          while (i < len) {
            a = a[prop[i]];
            b = b[prop[i]];
            i++;
          }
          if (a < b) {
            return -1;
          } else if (a > b) {
            return 1;
          } else {
            return 0;
          }
        });
        return arr;
      };

      var sortedData = sort(title, data);

      onSort(sortedData);
      this.setState({
        orderDesc: true,
        sortedTitle: title,
      });
    }
  };
}

export default TableHeader;
