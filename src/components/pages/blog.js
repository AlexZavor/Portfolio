import React, {Component} from 'react';
import axios from 'axios';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import BlogItem from "../blog/blog-item";
import BlogModlal from "../modals/blog-modal";


class Blog extends Component {
    constructor(){
        super();
        this.state = {
            blogItems: [],
            totalCount: 0,
            currentPage: 0,
            isLoading: true,

            modalIsOpen: false
        }

        this.getBlogItems = this.getBlogItems.bind(this);
        this.onScroll = this.onScroll.bind(this);
        window.addEventListener("scroll", this.onScroll, false);
        this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.handleNewBlogSumbission = this.handleNewBlogSumbission.bind(this);
    }

    onScroll(){
        if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount){
            return;
        }
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            this.setState({
                isLoading: true
            })
            this.getBlogItems();
        }
    }

    getBlogItems(){
        this.setState({
            currentPage: this.state.currentPage + 1
        });
        axios.get(
            `https://acarter.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currentPage}`,
            {withCredentails: true}
        ).then(response =>{
            this.setState({
                blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
                totalCount: response.data.meta.total_records,
                isLoading: false
            });
        }).catch(error =>{
            console.log("blogerror", error);
        });
    }

    componentWillMount(){
        this.getBlogItems();
    }

    componentWillUnmount(){
        window.removeEventListener("scroll", this.onScroll, false);
    }

    handleNewBlogClick(){
        this.setState({
            modalIsOpen: true
        });
    }

    handleModalClose(){
        this.setState({
            modalIsOpen: false
        });
    }

    handleNewBlogSumbission(blog){
        this.setState({
            modalIsOpen: false,
            blogItems: [blog].concat(this.state.blogItems)
        })
    }

    render(){
        const blogRecords = this.state.blogItems.map(blogItem =>{
            return <BlogItem 
                    key={blogItem.id} 
                    blogItem={blogItem} />;
        })
        return (
            <div className="blog-container">
                <BlogModlal 
                    modalIsOpen = {this.state.modalIsOpen}
                    handleModalClose = {this.handleModalClose}
                    handleNewBlogSumbission = {this.handleNewBlogSumbission}
                />
                <div>
                    <FontAwesomeIcon icon="pen-fancy" onClick={this.handleNewBlogClick}/>
                </div>

                <div className="content-container">
                    {blogRecords}
                </div>
                {this.state.isLoading ? (
                <FontAwesomeIcon icon="spinner" className="spinner" spin/>
                ) : null}
            </div>
        );
    }
}

export default Blog;