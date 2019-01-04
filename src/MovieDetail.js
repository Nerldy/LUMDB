/* eslint-disable no-console */
import React, { Component } from 'react';
import './App.css';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {},
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`);
      const movie = await res.json();
      this.setState({ movie });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    console.log(movie);
    return (
      <div>
        <img src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title} />
        <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>Release Date: {movie.release_date}</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
      </div>
    );
  }
}

export default MovieDetail;
