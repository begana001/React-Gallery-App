import React from 'react';

//warning message when there is no image results
const NotFound = (props) => {
    return(
        <li className="not-found">
            <h2>{props.query}</h2>
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
        </li>
    );
}

export default NotFound;