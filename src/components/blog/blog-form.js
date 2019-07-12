import React, {Component} from 'react';
import axios from 'axios';
import RichTextEditor from '../forms/rich-text-editor'

export default class BlogForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: "",
            blog_status: "",
            content: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleRichTextEditorChange = this.handleRichTextEditorChange.bind(this);
    }

    handleRichTextEditorChange(content){
        this.setState({ content });
    }

    buildForm(){
        let formData = new FormData();

        formData.append("portfolio_blog[title]", this.state.title);
        formData.append("portfolio_blog[blog_status]", this.state.blog_status);
        formData.append("portfolio_blog[content]", this.state.content);

        return formData;
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        axios
            .post("https://acarter.devcamp.space/portfolio/portfolio_blogs", 
            this.buildForm(), 
            {withCredentials: true }
            ).then(response => {
                this.props.handleNewFormSumbission(response.data.portfolio_blog);

                this.setState({
                    title: "",
                    blog_status: ""
                })
            }).catch(error =>{
                console.log("handle submit blog error", error);
            });
        


        event.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="blog-form-wrapper">
                    <div className="two-column">
                        <input 
                            onChange={this.handleChange} 
                            name="title"
                            type="text"
                            placeholder="Blog Title"
                            value={this.state.title}
                        />
                        <input 
                            onChange={this.handleChange} 
                            name="blog_status"
                            type="text"
                            placeholder="Blog Status"
                            value={this.state.blog_status}
                        />
                    </div>

                    <div className="one-column">
                        <RichTextEditor
                            handleRichTextEditorChange = {this.handleRichTextEditorChange}
                        />
                    </div>
                    
                    <button className="btn">Save</button>
                </div>
            </form>
        );
    }
}