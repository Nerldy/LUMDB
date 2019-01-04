import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';


const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
  <Overdrive id={movie.id}>
    <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
  </Overdrive>
);

Movie.propTypes = {
  movie: PropTypes.shape({ title: PropTypes.string.isRequired }).isRequired,
};

export default Movie;

export const Poster = styled.img`
box-shadow: 0 0 35px black;
`;
