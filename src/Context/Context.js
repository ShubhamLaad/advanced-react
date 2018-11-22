import React, { Component } from 'react';
import Child from './Child';
import { LangContext } from './LangContext';
import eng from "./en.json";
import hid from "./hi.json";

class Context extends Component {
  state = {
    lang: eng,
  };

  toggleLang = () => {
    this.setState(state => ({
      lang: state.lang === eng ? hid : eng
    }))
  }

  static contextType = LangContext;

  render() {
    return (
      <LangContext.Provider value={this.state.lang}>
        <h2>Context</h2>
        <button onClick={this.toggleLang}>eng/hindi</button>
        <Child />
      </LangContext.Provider>
    );
  }
}

export default Context;
