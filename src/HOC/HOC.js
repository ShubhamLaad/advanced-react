import React, { Component } from 'react';
import Axios from 'axios';
import MoviesList from './MoviesList';

class HOC extends Component {
  state = {
    movies: [],
    isLoader: true,
  }

  componentDidMount() {
    Axios.get('https://ghibliapi.herokuapp.com/films')
      .then(({ data }) => {
        this.setState({ movies: data, isLoader: false });
      })
      .catch(error => {
        this.setState({ isLoader: false })
      });
  }

  render() {
    return (
      <div>
        <h2>HOC</h2>
        <MoviesList movies={this.state.movies} isLoader={this.state.isLoader} />
      </div>
    )
  }
}

export default HOC;
