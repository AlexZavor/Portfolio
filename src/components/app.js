import React, { Component } from 'react';
import moment from 'moment';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import PortfolioContainer from './portfolio/portfolio-container';
import NavigationContainer from './navigation/Navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <h1>This is the beggining!</h1>
        <h2>prepare the portfolio</h2>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>

        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route path = "/about-me" component = {About} />
              <Route path = "/contact" component = {Contact} />
              <Route path = "/blog" component = {Blog} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
