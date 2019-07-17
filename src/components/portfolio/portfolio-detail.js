import React, {Component} from 'react';
import axios from 'axios';

export default class PortfolioDetail extends Component {
    constructor(props){
        super(props);

        this.state ={
            data: []
        }

        this.getPortfolioItem = this.getPortfolioItem.bind(this);
    }

    getPortfolioItem(){
        axios.get(`https://acarter.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        {withCredentials: true})
        .then(response => {
            console.log("res", response);
        }).catch(error => {
            console.log('get portfolio item error', error);
        });

    }

    componentWillMount(){
        this.getPortfolioItem()
    }

    render(){
        return (
            <div>
                <h2>Portfolio detail for {this.props.match.params.slug}</h2>
    
            </div>
        );
    }
}