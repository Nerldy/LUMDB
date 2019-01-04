import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    id: 1,
    title: "Test 1",
    desc: "Lorem ipsum dolor sit amet."
  },
  {
    id: 2,
    title: "Test ",
    desc: "Lorem ipsum dolor sit amet."
  },
  {
    id: 3,
    title: "Test 3",
    desc: "Lorem ipsum dolor sit amet."
  }
]

const Movies = () => (
  <div>
    {movies.map(movie => (
      <Movie key={movie.id} movie={movie}/>
    ))}
  </div>
)
class App extends Component {
  
  render() {
    
    return (
      <div className="App">
       <header className="App-header">
       <img src={logo} alt="logo" className='App-logo'/>
       </header>
       <Movies />
      </div>
    );
  }
}

export default App;
