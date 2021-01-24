// import React from "react";

const MovieForm = ({ match, history }) => {
  return (
    <div>
      <h1>Movie</h1>
      <p> id = {match.params.id}</p>
      <button
        className="btn btn-primary"
        onClick={() => history.push("/customers")}
      >
        save
      </button>
    </div>
  );
};

export default MovieForm;
