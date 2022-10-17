import React, { Component } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="m-3">
      <h1 className="mb-3">Movie form {GetMovieId()}</h1>

      <button onClick={() => navigate("/")} className="btn btn-primary p-3 ">
        Save
      </button>
    </div>
  );
  function GetMovieId() {
    const location = useLocation();
    const { movieId } = location.state;

    return movieId;
  }
};

export default MovieDetails;
