import React from 'react';
import {Link} from 'react-router-dom';

export default function () {
    return (
        <div>
            <h2>sorry, it seems the page you where trying to find doesn't yet exist.</h2>
            <Link to="/">Return to home</Link>
        </div>
    );
}