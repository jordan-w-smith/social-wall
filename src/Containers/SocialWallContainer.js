import React from 'react';
import ItemComponent from '../Components/ItemComponent'
import './SocialWallContainer.css'

class SocialWallContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch('http://private-cc77e-aff.apiary-mock.com/posts')
            
            .then(res => res.json())
            .then(JSON.stringify.res)
            .then(posts => this.setState({
                items: posts.items
            }))
    }

    render() {
        return(
            <div className="social-wall-container">
                <ItemComponent items={this.state.items}></ItemComponent>
            </div>
        )
    }

}

export default SocialWallContainer;