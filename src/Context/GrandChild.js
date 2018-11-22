import React, { Component } from 'react';
import { LangContext } from './LangContext';


class GrandChild extends Component {
  static contextType = LangContext;

  render() {
    return (
      <LangContext.Consumer>
        {lang =>
          <div>
            <h3>{lang.name}</h3>
            <p>{lang.text}</p>
          </div>
        }
      </LangContext.Consumer>
    );
  }
}

export default GrandChild;
