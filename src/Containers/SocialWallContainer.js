import React from 'react';
import ItemComponent from '../Components/ItemComponent'

class SocialWallContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }
    render() {
        return(
            <ItemComponent></ItemComponent>
        )
    }

}

export default SocialWallContainer;