import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import './Main.css';

const Main = ({ children }) => {
  return (
    <Fragment>
      <header>
        <nav>
          <Link to="/">Dashboard</Link>
          <Link to="/context">Context</Link>
          <Link to="/error-boundary">error-boundary</Link>
          <Link to="/hoc">HOC</Link>
          <Link to="/portals">portals</Link>
        </nav>
      </header>
      <h1>Adavnced React</h1>
      {children}
    </Fragment>
  );
};

Main.defaultProps = {
  children: null,
};

export default Main;
