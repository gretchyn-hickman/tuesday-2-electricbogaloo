import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

const FavoriteMovieList = (props) => {
  const { favorites } = props;

  return (
    <div className="col-xs savedContainer">
      <h5>Favorite Movies</h5>
      {favorites.map((movie) => {
        return (
          <div key={movie.id}>
            <Link
              className="btn btn-light savedButton"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span>
                <span class="material-icons">remove_circle</span>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
const stateProps = (state) => {
  return {
    favorites: state.favsReducer.favs,
  };
};

export default connect(stateProps)(FavoriteMovieList);
