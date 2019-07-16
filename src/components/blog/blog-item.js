import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import striptags from 'striptags';
import Truncate from 'react-truncate';

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
                    <a className="action-icon"
                    onClick={() => props.handleDeleteClick(props.blogItem)}>
                        <FontAwesomeIcon icon="trash" />
                    </a>
                ) : null}
            </div>
            <div>
                <Truncate
                    lines={4}
                    ellipsis={
                        <span>
                            ... 
                            <Link to={`/b/${id}`}>
                                    Continue Reading
                            </Link>
                        </span>
                    }
                >
                {striptags(content)}
                </Truncate>
            </div>
        </div>
    );
}
export default BlogItem;