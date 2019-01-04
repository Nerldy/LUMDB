/* eslint-disable no-console */
import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './Movie';


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
      <MovieDiv backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
          </Overdrive>
          <div>
            <h2>{movie.title}</h2>
            <p>Release Date: {movie.release_date}</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieDiv>
    );
  }
}

export default MovieDetail;

const MovieDiv = styled.div`
position: relative;
padding-top: 50vh;
background: url(${props => props.backdrop}) no-repeat;
background-size: cover;
`;

const MovieInfo = styled.div`
background: rgb(250,250,250, 0.9);
text-align: left;
padding: 2rem 10%;
display: flex;
> div {
  margin-left: 20px;
}

img {
  position: relative;
  top: -5rem;
}
`;
