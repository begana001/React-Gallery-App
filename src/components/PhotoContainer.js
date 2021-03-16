import React, { Component } from 'react';

import Photo from './Photo';
import NotFound from './NotFound';

class PhotoContainer extends Component{
    
    render(){
        const results = this.props.imgs;
        const query = this.props.query;
        let imgs;

        //if there are image results, pass the data and store them in the Photo container
        //if there is no image results, the warning message is showed on the browser
        if ( results.length > 0 ){
            imgs = results.map( img =>
                <Photo 
                    farm={img.farm}
                    server={img.server}
                    id={img.id}
                    secret={img.secret}
                    key={img.id}
                />
            )
        } else {
            imgs = <NotFound />
        }

        return(
            <div className="photo-container">
                <h2>{query}</h2>
                <ul>
                {/* if the loading state is true, loading message is showed on the brower
                if it's not, image results are renders on the browser 
                basically, when user searches a new topic, loading message is showed each time*/}
                    {
                        (this.props.loading)
                        ?<p>Loading...</p>
                        :imgs
                    } 
                </ul>
            </div>
        );
    }
}

export default PhotoContainer;