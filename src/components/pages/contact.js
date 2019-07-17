import React from 'react';
import contactImg from '../../../static/assets/images/auth/Slime.jpg';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
                    <FontAwesomeIcon icon="id-card" className="icon"/>
                </div>
                <div className="content-wrapper">
                    <div className="two-column">    
                        <FontAwesomeIcon icon="phone-square-alt" className="icon"/>
                        <div className="text">
                            123-456-7890
                        </div>
                    </div>
                    <div className="two-column">
                        <div className="text">
                            Mystery Shack<br></br>
                            Gravity Falls, OR, 97009
                        </div>
                        <FontAwesomeIcon icon="map-marker-alt" className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}