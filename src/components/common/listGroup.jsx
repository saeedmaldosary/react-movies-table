import React, { Component } from "react";

class ListGroup extends Component {
  render() {
    var { genres, currentGenre, onChangeGenre, genresId } = this.props;
    if (!genres.includes("All Genres")) {
      genres.unshift("All Genres");
      genresId.unshift("");
    }
    return (
      <div>
        <ul className="list-group">
          {genres.map((genre, index) => (
            <li
              role="button"
              key={genresId[index]}
              onClick={() => onChangeGenre(genre)}
              className={
                "list-group-item" + (currentGenre === genre ? " active" : "")
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
