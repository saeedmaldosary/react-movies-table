import React, { Component } from "react";

class ListGroup extends Component {
  state = {};
  render() {
    var { genres, currentGenre, onChangeGenre, genresId } = this.props;
    genres.unshift("All Genres");
    genresId.unshift("5b21ca3eeb7f6fbccd471821");
    return (
      <div>
        <ul className="list-group">
          {genres.map((genre, index) => (
            <li
              key={genresId[index]}
              onClick={() => onChangeGenre(genre)}
              className={
                currentGenre === genre
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {genre}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListGroup;
