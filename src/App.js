import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header';
import Articles from './components/articles';
import Article from './components/article';
import NewArticle from './components/new-article';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Router>
            <Switch>
              <Route path="/" exact component={Articles} />
              <Route path="/articles/new" exact component={NewArticle} />
              <Route path="/articles/:id" exact component={Article} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
