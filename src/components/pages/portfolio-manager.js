import React, {Component} from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list"

export default class PortfolioManager extends Component{
    constructor() {
        super();
        this.state = {
            portfolioItems: []
        }
    }
  
    getPortfolioItems(){
        axios
          .get('https://acarter.devcamp.space/portfolio/portfolio_items')
          .then(responce => {
            this.setState({
                portfolioItems: [...responce.data.portfolio_items]
            })
          })
          .catch(error => {
            console.log("error in get items", error);
          });
    }

    componentDidMount(){
        this.getPortfolioItems();
    }

    render() {
        return(
            <div className='portfolio-manager-wrapper'>
                <div className='left-side'>
                    Left
                </div>
                <div className='right-side'>
                    <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
        );
    }
}