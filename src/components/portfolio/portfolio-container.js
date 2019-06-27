import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to the portfolio",
            isLoading: false,
            data: [
                {title: 'Alex', catagory: "eCommerce"}, 
                {title: 'Nate', catagory: "Scheduling"}, 
                {title: 'no u', catagory: "enterprize"}, 
                {title: 'ext.', catagory: "eCommerce"} 
            ]
        }

        this.handleFilter = this.handleFilter.bind(this);
    }

    portfolioItems(){
        return this.state.data.map(
            item => {
                return <PortfolioItem title = {item.title} />;
            }
        );
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