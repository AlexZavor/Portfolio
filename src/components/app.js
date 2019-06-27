import React, { Component } from 'react';
import moment from 'moment';

import PortfolioContainer from './portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>This is the beggining!</h1>
        <h2>prepare the portfolio</h2>
        <PortfolioContainer />
        <div>
          {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
