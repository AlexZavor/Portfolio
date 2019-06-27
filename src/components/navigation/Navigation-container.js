import React, { Component } from 'react';

export default class NavigationContainer extends Component {
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
                <button>Blog</button>
                {true ? <button>Add Blog</button> : null}
            </div>
        );
    }
}