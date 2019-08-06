import React, { Component } from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
  
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to the portfolio",
            isLoading: true,
            data: [],
            dataFiltered: []
        }

        this.handleFilter = this.handleFilter.bind(this);
    }
  
    getPortfolioItems(){
        axios
          .get('https://acarter.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc')
          .then(responce => {
            this.setState({
                data: responce.data.portfolio_items,
                dataFiltered: responce.data.portfolio_items,
                isLoading: false
            })
          })
          .catch(error => {
            console.log(error);
          });
    }

    portfolioItems(){
        return this.state.dataFiltered.map(item => {
            return (<PortfolioItem 
                key = {item.id}
                item = {item}
            />);
        });
    }

    componentDidMount(){
        this.getPortfolioItems();
    }

    handleFilter(filter){
        if (filter === 'All'){
            this.setState({
                dataFiltered: this.state.data
            })
        }else{
            this.setState({
                dataFiltered: this.state.data.filter(item => {
                    return item.category == filter;
                })
            })
        }
    }

    render() {
        return (
            <div>
                <div className="four-column portfolio-buttons">
                    <button className="btn" onClick={() => this.handleFilter('All')}>
                        All
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('Main-characters')}>
                        Main characters
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('Side-characters')}>
                        Side characters
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('Other')}>
                        Other
                    </button>
                </div>
                <div className="portfolio-items-wrapper">
                    {this.state.isLoading ? (
                        <div className="loading">
                            <FontAwesomeIcon icon="spinner" className="spinner" spin/>
                        </div>
                    ):null}
                    {this.portfolioItems()}
                </div>
            </div>
        );
    }
}