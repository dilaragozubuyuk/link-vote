import React from 'react';
import './App.css';
import ListContainer from './containers/links.container';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ListContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
