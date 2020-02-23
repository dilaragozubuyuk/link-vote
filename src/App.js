import React from 'react';
import './App.css';
import ListContainer from './containers/links.container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddLink from './components/add-link.component';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/list">
          <ListContainer />
        </Route>
        <Route path="/add-link">
          <AddLink />
        </Route>
        <Route path="/">
          <ListContainer />
        </Route>
      </Switch>
    </Router >
  );
}

export default App;
