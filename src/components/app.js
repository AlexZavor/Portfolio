import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import axios from 'axios';
import NavigationContainer from './navigation/Navigation-container';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Blog from './pages/blog';
import BlogDetail from './pages/blog-detail'
import Auth from './pages/auth';
import PortfolioManager from './pages/portfolio-manager';
import PortfolioDetail from './portfolio/portfolio-detail.js';
import NoMatch from './pages/no-match';
import Icons from '../helpers/icons';

export default class App extends Component {
  constructor(props){
    super(props);

    Icons();

    this.state ={
      loggedInStatus: "NOT_LOGGED_IN"
    }

    this.handleSuccsessfulLogin = this.handleSuccsessfulLogin.bind(this);
    this.handleUnsuccsessfulLogin = this.handleUnsuccsessfulLogin.bind(this);
    this.handleSuccsessfulLogout = this.handleSuccsessfulLogout.bind(this);
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

  handleSuccsessfulLogout(){
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    })
  }

  checkLoginStatus(){
    return axios.get("https://api.devcamp.space/logged_in",
    {withCredentials: true})
    .then(responce=> {
      const loggedIn = responce.data.logged_in;
      const loggedInStatus = this.state.loggedInStatus;

      if (loggedIn && loggedInStatus === "LOGGED_IN") {
        return loggedIn;
      } else if (loggedIn && loggedInStatus === 'NOT_LOGGED_IN'){
        this.setState({
          loggedInStatus: "LOGGED_IN"
        });
      } else if (!loggedIn && loggedInStatus === 'LOGGED_IN'){
        this.setState({
          loggedInStatus: "NOT_LOGGED_IN"
        });
      }
    })
    .catch(error => {
      console.log("Error occured", error);
    })
  }

  componentDidMount(){
    this.checkLoginStatus();
  }

  authorizedPages(){
    return [
      <Route key="portfolio-manager" path = "/Portfolio-manager" component={PortfolioManager} />
    ]
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
            <NavigationContainer 
            loggedInStatus ={this.state.loggedInStatus}
            handleSuccsessfulLogout = {this.handleSuccsessfulLogout}
            />
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
              <Route path = "/blog" render={props => (
                <Blog
                  {...props}
                  loggedInStatus = {this.state.loggedInStatus}
                />
              )} />
              <Route path = "/b/:slug" render={props =>(
                <BlogDetail
                  {...props}
                  loggedInStatus = {this.state.loggedInStatus}
                />
              )} />
              { this.state.loggedInStatus === "LOGGED_IN" ? this.authorizedPages() : null}
              <Route exact path = "/portfolio/:slug" component = {PortfolioDetail} />

              <Route component = {NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
