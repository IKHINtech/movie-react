import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import ListGroup from "./common/listGroup";
import Pagination from "./common/paginate";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    currentPage: 1,
    pageSize: 4,
    genres: [],
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handdlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    console.log(genre);
  };
  render() {
    const { length: count } = this.state.movies;
    const { currentPage, pageSize, movies: allMovies, genres } = this.state;
    if (count === 0) return <p>There are no movie in database</p>;
    const movies = paginate(allMovies, currentPage, pageSize);
    return (
      <div className="row">
        <div className="row">
          <div className="col-12 text-center">
            <h1>Movie list app using ReactJs</h1>
          </div>
          <div className="col-12 text-center">
            <p>Showing {count} Movie in database </p>
          </div>
          <div className="col-3">
            <ListGroup items={genres} onItemSelect={this.handleGenreSelect} />
          </div>
          <div className="col-9">
            <table className="table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th>Like</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onClick={() => this.handleLike(movie)}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger btn-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={count}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handdlePageChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
