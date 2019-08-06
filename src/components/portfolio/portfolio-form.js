import React, {Component} from 'react';
import axios from 'axios';
import DropZoneComponent from 'react-dropzone-component';

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class PortfolioForm extends Component {
    constructor(props){
        super(props);
        this.state ={
            name: "",
            description: "",
            category: "filler",
            position: null,
            url: "",
            thumb_image: "",
            banner_image: "",
            logo: "",
            editMode: false,
            apiUrl: "https://acarter.devcamp.space/portfolio/portfolio_items",
            apiAction: "post"
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentConfig = this.componentConfig.bind(this);
        this.djsConfig = this.djsConfig.bind(this);
        this.handleThumbDrop = this.handleThumbDrop.bind(this);
        this.handleBannerDrop = this.handleBannerDrop.bind(this);
        this.handleLogoDrop = this.handleLogoDrop.bind(this);
        this.deleteImage = this.deleteImage.bind(this);

        this.thumbRef = React.createRef();
        this.bannerRef = React.createRef();
        this.logoRef = React.createRef();
    }

    componentDidUpdate(){
        if(Object.keys(this.props.portfolioToEdit).length > 0){
            const {
                id,
                name,
                description,
                category,
                position,
                url,
                thumb_image_url,
                banner_image_url,
                logo_url,
            } = this.props.portfolioToEdit;

            this.props.clearPortfolioToEdit();

            this.setState({
                id: id,
                name: name || "",
                description: description || "",
                category: category || "filler",
                position: position || "",
                url: url || "",
                editMode: true,
                apiUrl: `https://acarter.devcamp.space/portfolio/portfolio_items/${id}`,
                apiAction: "patch",
                thumb_image_url: thumb_image_url || "",
                banner_image_url: banner_image_url || "",
                logo_url: logo_url || ""
            })
        }
    }

    handleThumbDrop(){
        return{
            addedfile: file => this.setState({
                thumb_image: file
            })
        }
    }

    handleBannerDrop(){
        return{
            addedfile: file => this.setState({
                banner_image: file
            })
        }
    }

    handleLogoDrop(){
        return{
            addedfile: file => this.setState({
                logo: file
            })
        }
    }

    componentConfig(){
        return{
            iconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post"
        };
    }

    djsConfig(){
        return{
            addRemoveLinks: true,
            maxFiles: 1
        };
    }

    buildForm(){
        let formData = new FormData();

        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);
        formData.append("portfolio_item[category]", this.state.category);
        formData.append("portfolio_item[position]", this.state.position);
        debugger;
        if(this.state.thumb_image){
            formData.append("portfolio_item[thumb_image]", this.state.thumb_image);
        }
        if(this.state.banner_image){
            formData.append("portfolio_item[banner_image]", this.state.banner_image);
        }
        if(this.state.logo){
            formData.append("portfolio_item[logo]", this.state.logo);
        }

        return formData;
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: this.buildForm(),
            withCredentials: true
        })
        .then(response =>{
            if(this.state.editMode) {
                this.props.handleEditFormSubmission();
            } else {
                this.props.handleNewFormSubmission(response.data.portfolio_item);
            }
            this.setState ({
                name: "",
                description: "",
                category: "filler",
                position: "",
                url: "",
                thumb_image: "",
                banner_image: "",
                logo: "",
                editMode: false,
                apiUrl: "https://acarter.devcamp.space/portfolio/portfolio_items",
                apiAction: "post"
            });

            [this.thumbRef, this.bannerRef, this.logoRef].forEach(ref =>{
                ref.current.dropzone.removeAllFiles();
            })

        }).catch(error =>{
            console.log('handle submit error', error);
        });

        event.preventDefault();
    }

    deleteImage(imageType){
        axios
            .delete(
                `https://api.devcamp.space/portfolio/delete-portfolio-image/${this.state.id}?image_type=${imageType}`,
                {withCredentials: true}
            ).then(response => {
                this.setState({
                    [`${imageType}_url`]: ""
                })
            }).catch(error => {
                console.log("deleteImage Error", error);
            });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit} className='portfolio-form-wrapper'>
                <div className="two-column">
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
                <div className="one-column">
                    <select
                    name='category'
                    value={this.state.category}
                    onChange={this.handleChange}
                    className="select-element"
                    >
                        <option value="filler">Filler</option>
                        <option value="My Creations">My Creations</option>
                        <option value="eCommerce">eCommerce</option>
                    </select>
                </div>
                <div className="one-column">
                    <textarea
                    type='text'
                    name='description'
                    placeholder='Description'
                    value={this.state.description}
                    onChange={this.handleChange}
                    />
                </div>
                <div className="image-uploaders three-column">
                    {this.state.thumb_image_url && this.state.editMode ? (
                    <div className="edit-image-wrapper">
                        <img src={this.state.thumb_image_url} />
                        <a onClick={() => this.deleteImage('thumb_image')}>
                            <FontAwesomeIcon icon="minus-square" className="remove-icon" />
                        </a>
                    </div>
                    ):(
                        <DropZoneComponent
                            ref={this.thumbRef}
                            config={this.componentConfig()}
                            djsConfig={this.djsConfig()}
                            eventHandlers={this.handleThumbDrop()}
                        >
                            <div className="dz-message">Thumbnail</div>
                        </DropZoneComponent>
                    )}


                    {this.state.banner_image_url && this.state.editMode ? (
                    <div className="edit-image-wrapper">
                        <img src={this.state.banner_image_url} />
                        <a onClick={() => this.deleteImage('banner_image')}>
                            <FontAwesomeIcon icon="minus-square" className="remove-icon" />
                        </a>
                    </div>
                    ):(
                    <DropZoneComponent
                        ref={this.bannerRef}
                        config={this.componentConfig()}
                        djsConfig={this.djsConfig()}
                        eventHandlers={this.handleBannerDrop()}
                    >
                        <div className="dz-message">Banner</div>
                    </DropZoneComponent>
                    )}


                    {this.state.logo_url && this.state.editMode ? (
                    <div className="edit-image-wrapper">
                        <img src={this.state.logo_url} />
                        <a onClick={() => this.deleteImage('logo')}>
                            <FontAwesomeIcon icon="minus-square" className="remove-icon" />
                        </a>
                    </div>
                    ):(
                    <DropZoneComponent
                        ref={this.logoRef}
                        config={this.componentConfig()}
                        djsConfig={this.djsConfig()}
                        eventHandlers={this.handleLogoDrop()}
                    >
                        <div className="dz-message">Logo</div>
                    </DropZoneComponent>
                    )}


                </div>
                <div>
                    <button className='btn' type="submit">Save</button>
                </div>
            </form>
        );
    }
}