import React, { Component } from "react";

class ListGroup extends Component {
  state = {};
  render() {
    var genres = [
      { name: "All Genres", _id: "5b21ca3eeb7f6fbccd411216" },
      ...this.props.genres,
    ];
    return (
      <div>
        <ul className="list-group">
          {genres.map((genre) => (
            <li
              key={genre._id}
              onClick={() => this.props.onChangeGenre(genre.name)}
              className={
                this.props.currentGenre === genre.name
                  ? "list-group-item active"
                  : "list-group-item"
              }
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
