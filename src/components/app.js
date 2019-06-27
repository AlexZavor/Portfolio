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

export default class App extends Component {
  render() {
    return (
      <div className='app'>

        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path = "/" Component = {Home} />
              <Route path = "/about-me" Component = {About} />
            </Switch>
          </div>
        </Router>

        <h1>This is the beggining!</h1>
        <h2>prepare the portfolio</h2>
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
        <PortfolioContainer />
      </div>
    );
  }
}
