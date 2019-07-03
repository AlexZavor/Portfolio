import React, {Component} from 'react';
import axios from 'axios';

export default class PortfolioManager extends Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
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
        return this.state.data.map(item => {
            return (<PortfolioItem 
                key = {item.id}
                item = {item}
            />);
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
                    Right
                {this.portfolioItems()}
                </div>
            </div>
        );
    }
}