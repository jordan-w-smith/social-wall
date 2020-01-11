import React from 'react';
import ItemComponent from '../Components/ItemComponent'
import './SocialWallContainer.css'
import 'cors'
class SocialWallContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            image: ''
        };
        this.setImage = this.setImage.bind(this)
    }

    setImage(imageToSet) {
        this.setState({
            image: imageToSet
        })
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
            <div className="social-wall-container">
                <ItemComponent itemImage={this.state.image} items={this.state.items}></ItemComponent>
            </div>
        )
    }

}

export default SocialWallContainer;