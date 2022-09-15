import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./Like";
import Pagination from "./Pagination";
import ListGroup from "./ListGroup";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    currentGenre: "",
    pageSize: 2,
    currentPage: 1,
  };

  render() {
    return (
      <div className="container p-2">
        <p>{this.displayTitle()}</p>
        <div className="row">
          <div className="col-md-2 col-sm-6 mt-4">
            <ListGroup
              onChangeGenre={this.handleGenre}
              genres={this.state.genres}
              currentGenre={this.state.currentGenre}
            />
          </div>
          <div className="col-md-10 col-sm-6">
            <table
              className={this.state.movies.length > 0 ? "table" : "d-none"}
            >
              <thead>
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Genre</th>
                  <th scope="col">Stock</th>
                  <th scope="col">Rate</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              {this.getMoviesList()}
            </table>
            <Pagination
              itemsLength={this.state.movies.length}
              pageSize={this.state.pageSize}
              onPageChange={this.handlePageChange}
              currentPage={this.state.currentPage}
            />
          </div>
        </div>
      </div>
    );
  }

  displayTitle = () => {
    var moviesLength = this.state.movies.length;
    return moviesLength > 0
      ? "Showing " + moviesLength + " movies in the database."
      : "There are no movies in the database.";
  };

  handleLike = (movie) => {
    var movies = this.state.movies;
    const index = this.state.movies.indexOf(movie);
    if (
      this.state.movies[index].liked === undefined ||
      this.state.movies[index].liked === false
    ) {
      this.state.movies[index].liked = true;
    } else {
      this.state.movies[index].liked = false;
    }

    this.setState({ movies: movies });
  };

  handlePageChange = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  handleGenre = (genre) => {
    var movies = getMovies();
    var moviesSelectedGenre = movies.filter((m) => m.genre.name === genre);
    this.setState({
      movies: moviesSelectedGenre,
      currentGenre: genre,
      currentPage: 1
    });
  };

  getMoviesList() {
    const indexOfLastMovie = this.state.currentPage * this.state.pageSize;
    const indexOfFirstMovie = indexOfLastMovie - this.state.pageSize;
    const currentMovies = this.state.movies.slice(
      indexOfFirstMovie,
      indexOfLastMovie
    );
    return (
      <tbody>
        {currentMovies.map((movie) => (
          <tr key={movie._id}>
            <th>{movie.title}</th>
            <th>{movie.genre.name}</th>
            <th>{movie.numberInStock}</th>
            <th>{movie.dailyRentalRate}</th>
            <th>
              <Like
                liked={movie.liked}
                onClick={() => this.handleLike(movie)}
              />
            </th>
            <th>
              <button
                onClick={() => this.deleteMovieList(movie._id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    );
  }

  deleteMovieList = (movieID) => {
    deleteMovie(movieID);
    var { currentGenre } = this.state;
    if (currentGenre) {
      this.handleGenre(currentGenre);
    } else {
      this.setState({ movies: getMovies() });
    }
  };
}

export default Movies;
