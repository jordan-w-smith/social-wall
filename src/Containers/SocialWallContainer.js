import React from 'react';
import ItemComponent from '../Components/ItemComponent'

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
            .then(posts => this.setState({
                items: posts.items
            }))
    }

    render() {
        return(
            <ItemComponent items={this.state.items}></ItemComponent>
        )
    }

}

export default SocialWallContainer;