import React, {Component} from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component{
    constructor() {
        super();

        this.state = {
            portfolioItems: []
        }

        this.handleSuccsessfulFormSubmission = this.handleSuccsessfulFormSubmission.bind(this);
        this.handleUnsuccsessfulFormSubmission = this.handleUnsuccsessfulFormSubmission.bind(this);
    }

    handleSuccsessfulFormSubmission(portfolioItems){
        // TODO
        // update state and upload
    }

    handleUnsuccsessfulFormSubmission(error){
        console.log("error submiting", error)
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
                    <PortfolioForm 
                        handleSuccsessfulFormSubmission={this.handleSuccsessfulFormSubmission}
                        handleUnsuccsessfulFormSubmission={this.handleUnsuccsessfulFormSubmission}
                        data={this.state.portfolioItems}
                    />
                </div>
                <div className='right-side'>
                    <PortfolioSidebarList data={this.state.portfolioItems}/>
                </div>
            </div>
        );
    }
}