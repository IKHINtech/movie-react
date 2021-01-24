import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
// import TableBody from "./common/tableBody";

class MovieTable extends Component {
  columns = [
    {
      path: "title",
      label: "Table",
      content: (movie) => <Link to={`/movie/${movie._id}`}></Link>,
    },
    { path: "genre", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like", content: <Like /> },
    { key: "delete" },
  ];
  render() {
    const { movies, onDelete, onLike, sortColumn, onSort } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        {/* <TableBody data={movies} columns={this.columns} /> */}
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>
                <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
              </td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like liked={movie.liked} onClick={() => onLike(movie)} />
              </td>
              <td>
                <button
                  onClick={() => onDelete(movie)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MovieTable;
