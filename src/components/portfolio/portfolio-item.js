import React from 'react';
import {Link} from 'react-router-dom';

export default function(props){
    return(
        <div>
            <h3>{props.title}</h3>
            <Link to={`/Portfolio/${props.slug}`}>Link</Link>
        </div>
    );
}