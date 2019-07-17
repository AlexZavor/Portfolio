import React, {Component} from 'react';
import Login from '../auth/login';
import loginImg from "../../../static/assets/images/auth/Slime.jpg";

export default class Auth extends Component{
    constructor(props){
        super(props);

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
        this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
    }

    handleSuccessfulAuth(){
        this.props.handleSuccsessfulLogin();
        this.props.history.push("/");
    }

    handleUnsuccessfulAuth(){
        this.props.handleUnsuccsessfulLogin();
    }

    render(){
        return (
            <div className="side-by-side-wrapper">
                <div className="left-column" 
                    style={{
                        backgroundImage: `url(${loginImg})`
                    }}
                />
                <div className="right-column">
                    <Login 
                        handleSuccessfulAuth={this.handleSuccessfulAuth}
                        handleUnsuccessfulAuth={this.handleUnsuccessfulAuth}
                    />
                </div>
            </div>
        );
    }
}