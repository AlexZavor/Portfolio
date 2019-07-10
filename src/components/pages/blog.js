import React, {Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class Blog extends Component {
    constructor(){
        super();
        this.state = {
            blogItems: []
        }

        this.getBlogItems = this.getBlogItems.bind(this);
    }

    getBlogItems(){
        axios.get(
            "https://acarter.devcamp.space/portfolio/portfolio_blogs",
            {withCredentails: true}
        ).then(response =>{
            this.setState({
                blogItems: response.data.portfolio_blogs
            })
        }).catch(error =>{
            console.log("blogerror", error);
        });
    }

    componentWillMount(){
        this.getBlogItems();
    }

    render(){
        return (
            <div>
                blog
                <div>
                    <Link to='/about-me'>Learn more about me.</Link>
                </div>
            </div>
        );
    }
}

export default Blog;