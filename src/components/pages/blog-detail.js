import React, {Component} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

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
        const{
            title,
            content,
            featured_image_url,
            blog_status
        } = this.state.blogItem;
        return(
            <div className="blog-container">
                <div className='content-container'>
                    <div className="title">
                        <h1>{title}</h1>
                    </div>
                    {featured_image_url !== null ? (
                        <div className="featured-image-wrapper">
                        <img src={featured_image_url} />
                        </div>
                    ) : null}
                    <div className="content">
                        {ReactHtmlParser(content)}
                    </div>
                </div>
            </div>
        );
    }
}