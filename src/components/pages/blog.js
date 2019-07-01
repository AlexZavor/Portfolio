import React from 'react';
import { Link } from "react-router-dom";

export default function () {
    return (
        <div>
            blog
            <div>
                <Link to='/about-me'>Learn more about me.</Link>
            </div>
        </div>
    );
}