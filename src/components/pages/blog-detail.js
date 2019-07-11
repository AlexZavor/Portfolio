import React, {Component} from 'react';
import axios from 'axios';

export default class BlogDetail extends Component{
    constructor(props){
        super(props);

        this.state = {
            blogId: this.props.match.params.slug,
            blogItem: {}
        }
    }

    getBlogItem(){
        axios.get(`https://acarter.devcamp.space/portfolio/portfolio_blogs/${this.state.blogId}`
        ).then(response =>{
            this.setState({
                blogItem: response.data.portfolio_blog
            });
        }).catch(error => {
            console.log("error getting blog item", error);
        });
    }

    componentDidMount(){
        this.getBlogItem();
    }

    render(){
        return(
            <div>
                <h1>Blog Detail</h1>
            </div>
        );
    }
}