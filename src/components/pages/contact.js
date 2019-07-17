import React from 'react';
import contactImg from '../../../static/assets/images/auth/Slime.jpg'

export default function () {
    return (
        <div className="side-by-side-wrapper">
            <div className="left-column"
                style={{
                    backgroundImage: `url(${contactImg})`
                }}
            >
            </div>
            <div className="right-column">
                <div className="title-wrapper">
                    <h1>Contact Info</h1>
                </div>
                <div className="content-wrapper">
                    
                </div>
            </div>
        </div>
    );
}