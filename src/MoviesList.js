/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Movie from './Movie';

class MoviesList extends Component {
	state = {
	  movies: [],
	};

	async componentDidMount() {
	  try {
	    const res = await fetch(
	      `https://api.themoviedb.org/3/discover/movie?api_key=${
	        process.env.REACT_APP_TMDB_KEY
	      }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
	    );
	    const movies = await res.json();
	    this.setState({ movies: movies.results });
	  } catch (e) {
	    console.log(e);
	  }
	}

	render() {
	  const { movies } = this.state;
	  console.log(movies);
	  return (
  <MovieGrid>
    {movies.map(movie => (
      <Link to={`/${movie.id}`} key={movie.id}>
        <Movie movie={movie} />
      </Link>
    ))}
  </MovieGrid>
	  );
	}
}

export default MoviesList;

const MovieGrid = styled.div`
	display: grid;
	padding: 4rem;
	grid-template-columns: repeat(6, 1fr);
	grid-row-gap: 2rem;
`;
