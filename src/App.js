import React, { Component } from 'react';

import Header from './components/header';
import Articles from './components/articles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <h1>Articles</h1>
          <Articles />
        </div>
      </div>
    );
  }
}

export default App;
