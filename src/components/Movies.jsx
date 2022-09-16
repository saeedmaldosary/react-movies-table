import React, { Component } from "react";
import { getMovies, deleteMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/Pagination";
import MovieTable from "./MovieTable";
import ListGroup from "./common/ListGroup";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    currentGenre: "All Genres",
    pageSize: 4,
    currentPage: 1,
  };

  render() {
    var { genres, currentGenre, movies, currentPage, pageSize } = this.state;
    var genresName = genres.map((g) => g.name);
    var genresId = genres.map((g) => g._id);
    return (
      <div className="container p-2">
        <p>{this.displayTitle()}</p>
        <div className="row">
          <div className="col-md-2 col-sm-6 mt-4">
            <ListGroup
              onChangeGenre={this.handleGenre}
              genres={genresName}
              genresId={genresId}
              currentGenre={currentGenre}
            />
          </div>
          <div className="col-md-10 col-sm-6">
            <MovieTable
              movies={movies}
              currentPage={currentPage}
              pageSize={pageSize}
              onDeleteMovieList={this.deleteMovieList}
              onLike={this.handleLike}
            />
            <Pagination
              itemsLength={movies.length}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
              currentPage={currentPage}
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
    const index = movies.indexOf(movie);
    if (movies[index].liked === undefined || movies[index].liked === false) {
      movies[index].liked = true;
    } else {
      movies[index].liked = false;
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
      movies: genre === "All Genres" ? movies : moviesSelectedGenre,
      currentGenre: genre,
      currentPage: 1,
    });
  };

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
