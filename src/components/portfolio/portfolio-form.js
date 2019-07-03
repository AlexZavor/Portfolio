import React, {Component} from 'react';

export default class PortfolioForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "",
            description: "",
            catagory: "",
            position: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.buildForm = this.buildFrom.bind(this);
    }

    buildFrom(){
        let formData = new FormData();

        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[catagory]", this.state.catagory);
        formData.append("portfolio_item[position]", this.state.position);

        return formData;
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        this.buildForm();
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Portfolio Form</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input
                        type='text'
                        name='name'
                        placeholder='Portfolio Item Name'
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                        <input
                        type='text'
                        name='url'
                        placeholder='URL'
                        value={this.state.url}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                        type='text'
                        name='position'
                        placeholder='Postion'
                        value={this.state.position}
                        onChange={this.handleChange}
                        />
                        <input
                        type='text'
                        name='catagory'
                        placeholder='Catagory'
                        value={this.state.catagory}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <input
                        type='text'
                        name='description'
                        placeholder='Description'
                        value={this.state.description}
                        onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}