import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Truncate from 'react-truncate';

export default class PortfolioItem extends Component {
    constructor(props){
        super(props);
        this.state={
            portfolioItemClass:"",
        };
    }

    handleMouseEnter(){
        this.setState({portfolioItemClass: 'image-blur'})
    }

    handleMouseLeave(){
        this.setState({portfolioItemClass: ''})
    }

    render() {
        const { id, description, thumb_image_url, logo_url } = this.props.item;
        return (
            <Link 
            className="portfolio-item-wrapper" 
            onMouseEnter={() => this.handleMouseEnter()}
            onMouseLeave={() => this.handleMouseLeave()}
            to={`/portfolio/${id}`}
            >
                <div 
                    className={"portfolio-img-background " + this.state.portfolioItemClass}
                    style={{
                        backgroundImage: "url(" + thumb_image_url + ")"
                    }}
                >
                </div>
                <div className="img-text-wrapper">
                    <div className="logo-wrapper">
                        <img src={logo_url} />
                    </div>
                    <div className="subtitle">
                        <Truncate
                            lines={3}
                            ellipsis={
                                <span>
                                    ... Continue reading
                                </span>
                            }
                        >
                            {description}
                        </Truncate>
                    </div>
                </div>
            </Link>
        );
    }
}