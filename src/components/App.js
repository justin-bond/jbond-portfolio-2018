import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Header from './header.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="portfolio">
          <Header />
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
