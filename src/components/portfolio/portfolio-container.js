import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to the portfolio",
            isLoading: false,
            data: [
                {title: 'Alex', catagory: "eCommerce", slug: 'Alex'}, 
                {title: 'Nate', catagory: "Scheduling", slug: 'Nate'}, 
                {title: 'no u', catagory: "enterprize", slug: 'No-u'}, 
                {title: 'ext.', catagory: "eCommerce", slug: 'ext'} 
            ]
        }

        this.handleFilter = this.handleFilter.bind(this);
    }

    portfolioItems(){
        return this.state.data.map(
            item => {
                return <PortfolioItem title = {item.title} slug={item.slug} />;
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