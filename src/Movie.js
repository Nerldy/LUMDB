import React from 'react';
import PropTypes from "prop-types";

const Movie = ({movie}) => (
   <div>
        <h2>{movie.title}</h2>
    <p>{movie.desc}</p>
   </div>
)

Movie.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
    })
}

  export default Movie;