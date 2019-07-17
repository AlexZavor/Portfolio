import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class PortfolioDetail extends Component {
    constructor(props){
        super(props);

        this.state ={
            portfolioItem: {}
        }

        this.getPortfolioItem = this.getPortfolioItem.bind(this);
    }

    getPortfolioItem(){
        axios.get(`https://acarter.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        {withCredentials: true})
        .then(response => {
            this.setState({
                portfolioItem: response.data.portfolio_item
            })
        }).catch(error => {
            console.log('get portfolio item error', error);
        });

    }

    componentWillMount(){
        this.getPortfolioItem()
    }

    render(){
        const {
            banner_image_url,
            category,
            description,
            logo_url,
            name,
            thumb_image_url,
            url
        } = this.state.portfolioItem
        return (
            <div className="detail-content-wrapper">
                <div
                    className="banner-wrapper"
                    style={{
                        backgroundImage: "url(" + banner_image_url + ")"
                    }}
                >
                    <div className="title">
                        <h1>{name}</h1>
                    </div>
                    <div className="logo-wrapper">
                        <img src={logo_url}/>
                    </div>
                </div>
                <div className="content-wrapper">
                    {description}
                    <div className="link">
                    <a href={url} target="new_tab">Check it out here!</a>
                    </div>
                </div>
            </div>
        );
    }
}