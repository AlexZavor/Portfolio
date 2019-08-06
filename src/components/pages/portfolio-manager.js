import React, {Component} from 'react';
import axios from 'axios';

import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component{
    constructor() {
        super();

        this.state = {
            portfolioItems: [],
            portfolioToEdit: {}
        }

        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
        this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
        this.handleUnsuccsessfulFormSubmission = this.handleUnsuccsessfulFormSubmission.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
    }

    clearPortfolioToEdit(){
        this.setState({
            portfolioToEdit: {}
        });
    }

    handleNewFormSubmission(portfolioItem){
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleEditFormSubmission(){
        this.getPortfolioItems();
    }

    handleUnsuccsessfulFormSubmission(error){
        console.log("error submiting", error)
    }
  
    getPortfolioItems(){
        axios
          .get('https://acarter.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc')
          .then(responce => {
            this.setState({
                portfolioItems: [...responce.data.portfolio_items 
                    .filter(item =>{
                        return item.position === null;
                    })]
            })
          })
          .catch(error => {
            console.log("error in get items", error);
          });
    }

    handleDeleteClick(portfolioItem){
        axios
            .delete(`https://acarter.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
            {withCredentials: true}
            ).then(response => {
                this.setState({
                    portfolioItems: this.state.portfolioItems.filter(item =>{
                        return item.id !== portfolioItem.id;
                    })
                });
                return response.data;
            }).catch(error => {
                console.log("delete error", error);
            });
    }

    handleEditClick(portfolioItem){
        this.setState({
            portfolioToEdit: portfolioItem
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
                        handleNewFormSubmission={this.handleNewFormSubmission}
                        handleEditFormSubmission={this.handleEditFormSubmission}
                        handleUnsuccsessfulFormSubmission={this.handleUnsuccsessfulFormSubmission}
                        clearPortfolioToEdit={this.clearPortfolioToEdit}
                        portfolioToEdit={this.state.portfolioToEdit}
                        data={this.state.portfolioItems}
                    />
                </div>
                <div className='right-side'>
                    <PortfolioSidebarList 
                        data={this.state.portfolioItems}
                        handleDeleteClick={this.handleDeleteClick} 
                        handleEditClick={this.handleEditClick}   
                    />
                </div>
            </div>
        );
    }
}