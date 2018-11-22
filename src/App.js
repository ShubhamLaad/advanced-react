import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Main from "./Main/Main";
import Dashboard from "./Dashboard/Dashboard";

const HOC = lazy(() => import('./HOC/HOC'));
const Context = lazy(() => import('./Context/Context'));

const App = () => (
  <Router>
    <Main path="/">
      <Route exact path="/" component={Dashboard} />
      <Suspense fallback={<div>Loading...</div>}>
        {/* The fallback prop accepts any React elements that you want to render while waiting for the component to load.
        You can place the Suspense component anywhere above the lazy component */}
        <Switch>
          <Route path="/HOC" component={HOC} />
          <Route path="/context" component={Context} />
        </Switch>
      </Suspense>
    </Main>
  </Router >
);

export default App;
