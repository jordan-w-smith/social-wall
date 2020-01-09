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
        fetch('https://private-cc77e-aff.apiary-mock.com/posts', {
            'Access-Control-Allow-Credentials' : true,
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'GET',
            'Access-Control-Allow-Headers':'application/json',
          })
            
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