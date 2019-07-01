import React, { Component } from 'react';
import axios from 'axios';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to the portfolio",
            isLoading: false,
            data: []
        }

        this.handleFilter = this.handleFilter.bind(this);
    }
  
    getPortfolioItems(){
        axios
          .get('https://acarter.devcamp.space/portfolio/portfolio_items')
          .then(responce => {
            this.setState({
                data: responce.data.portfolio_items
            })
          })
          .catch(error => {
            console.log(error);
          });
      }

    portfolioItems(){
        return this.state.data.map(
            item => {
                console.log("Portfolio item", item);
                return <PortfolioItem 
                    key = {item.id} 
                    title = {item.name} 
                    url={item.url} 
                    slug={item.id} 
                />;
            }
        );
    }

    componentDidMount(){
        this.getPortfolioItems();
    }

    handleFilter(filter){
        this.setState({
            data: this.state.data.filter(item => {
                return item.catagory == filter;
            })
        })
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('enterprize')}>enterprize</button>

                {this.portfolioItems()}
            </div>
        );
    }
}