import React, { Component } from "react";

class Pagination extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav aria-label="Page navigation example">{this.getPagesNumbers()}</nav>
      </div>
    );
  }

  getPagesNumbers = () => {
    var { currentPage, onPageChange } = this.props;
    var pageNumbers = this.calculatePageNumbers();
    return (
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={"page-item" + (number === currentPage ? " active" : "")}
          >
            <a
              className="page-link"
              href={"#" + number}
              onClick={() => onPageChange(number)}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  calculatePageNumbers = () => {
    const pageNumbers = [];
    var { itemsLength, pageSize } = this.props;
    for (let i = 1; i <= Math.ceil(itemsLength / pageSize); i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
}

export default Pagination;
