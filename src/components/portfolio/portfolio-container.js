import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        console.log('apple');
    }

    portfolioItems(){
        const data = ['Alex', 'Nate', 'no u', 'ext...'];

        return data.map(
            item => {
                return <PortfolioItem title = {item} />;
            }
        );
    }

    render() {
        return (
            <div>
                <h2>Portfolio items go here...</h2>
                {this.portfolioItems()}
            </div>
        );
    }
}