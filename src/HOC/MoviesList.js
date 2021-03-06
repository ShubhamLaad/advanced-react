import React, { Component, Fragment } from 'react';
import loaderHOC from './LoaderHOC';

class MoviesList extends Component {
  render() {
    return (
      <Fragment >
        <h3>{this.props.name}</h3>
        <h4>{this.props.listName}</h4>
        <ul>
          {this.props.movies.map(movie => <li key={movie.title}>{movie.title}</li>)}
        </ul>
      </Fragment>
    );
  }

  defaultProps = {
    movies: []
  }
}


export default loaderHOC({ listName: 'Movies' })(MoviesList);
