import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import NavigationContainer from './navigation/Navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Auth from './pages/auth';
import PortfolioDetail from './portfolio/portfolio-detail.js';
import NoMatch from './pages/no-match';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state ={
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccsessfulLogin = this.handleSuccsessfulLogin.bind(this)
    this.handleUnsuccsessfulLogin = this.handleUnsuccsessfulLogin.bind(this)
  }

  handleSuccsessfulLogin(){
    this.setState({
      loggedInStatus: "LOGGED_IN"
    })
  }

  handleUnsuccsessfulLogin(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path = "/" component = {Home} />

              <Route path = "/auth" render={props => (
                <Auth {...props} 
                handleSuccsessfulLogin={this.handleSuccsessfulLogin} 
                handleUnsuccsessfulLogin={this.handleUnsuccsessfulLogin} 
                />
              )} />
  
              <Route path = "/about-me" component = {About} />
              <Route path = "/contact" component = {Contact} />
              <Route path = "/blog" component = {Blog} />
              <Route exact path = "/portfolio/:slug" component = {PortfolioDetail} />

              <Route component = {NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
