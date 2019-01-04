/* eslint-disable no-console */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Movie from './Movie';

class MoviesList extends Component {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`);
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
      <div>
        {movies.map(movie => (
          <Link to={`/${movie.id}`} key={movie.id}>
            <Movie movie={movie} />
          </Link>
        ))}
      </div>
    );
  }
}

export default MoviesList;
