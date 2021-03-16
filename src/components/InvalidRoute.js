import React from 'react';

//warning message for invalid route 
const InvalidRoute = (props) => {
    return(
        <li className="not-found">
            <h2>{props.query}</h2>
            <h3>404 Not Found</h3>
            <p>Oh No! Page not found. Please try again.</p>
        </li>
    );
}

export default InvalidRoute;