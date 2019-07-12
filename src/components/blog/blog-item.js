import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogItem = props => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url
    } = props.blogItem;

    return( 
        <div>
            <div className="two-column">
                <Link to={`/b/${id}`}>
                    <h1>{title}</h1>
                </Link>
                {props.loggedInStatus === "LOGGED_IN" ? (
                    <div className="action-icon">
                        <FontAwesomeIcon icon="trash" />
                    </div>
                ) : null}
            </div>
            <div>
                {content}
            </div>
        </div>
    );
}
export default BlogItem;