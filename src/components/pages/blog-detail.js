import React, {Component} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

import BlogForm from '../blog/blog-form'

export default class BlogDetail extends Component{
    constructor(props){
        super(props);

        this.state = {
            blogId: this.props.match.params.slug,
            blogItem: {},
            editMode: false
        }

        this.handleEditClick = this.handleEditClick.bind(this);
    }

    handleEditClick(){
        console.log("handle edit click!!!")
        this.setState({
            editMode: true
        });
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

        const contentManager = () => {
            if (this.state.editMode) {
                return <BlogForm 
                    editMode={this.state.editMode}
                    blog={this.state.blogItem}
                />
            } else {
                return(
                    <div className='content-container'>
                        <div className="title">
                            <h1 onClick={this.props.loggedInStatus === "LOGGED_IN" ? this.handleEditClick : null}>{title}</h1>
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
                )
            }
        }

        return(
            <div className="blog-container">
                {contentManager()}
            </div>
        );
    }
}