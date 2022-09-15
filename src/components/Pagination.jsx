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
    var pageNumbers = this.calculatePageNumbers();
    return (
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={
              number === this.props.currentPage
                ? "page-item active"
                : "page-item"
            }
          >
            <a
              className="page-link"
              onClick={() => this.props.onPageChange(number)}
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
    for (
      let i = 1;
      i <= Math.ceil(this.props.itemsLength / this.props.pageSize);
      i++
    ) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
}

export default Pagination;
