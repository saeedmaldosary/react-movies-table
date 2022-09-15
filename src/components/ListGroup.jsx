import React, { Component } from "react";

class ListGroup extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul className="list-group">
          {this.props.genres.map((genre) => (
            <li
              key={genre._id}
              onClick={() => this.props.onChangeGenre(genre.name)}
              className={this.props.currentGenre === genre.name ? 'list-group-item active' : 'list-group-item'}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListGroup;
