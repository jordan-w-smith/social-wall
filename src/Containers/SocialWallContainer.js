import React from 'react';
import ItemComponent from '../Components/ItemComponent'
import './SocialWallContainer.css'
import 'cors'
class SocialWallContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            results: []
        };
        this.loadMore = this.loadMore.bind(this)
    }

    componentDidMount() {
        fetch('http://private-cc77e-aff.apiary-mock.com/posts')
            .then(res => res.json())
            .then(posts => this.setState({
                items: posts.items
            }))
        
    }

    loadMore() {
        let results = this.state.results
        results.push(...this.state.items)
        this.setState({
            results: results
        })
    }

    render() {
        return(
            <div className="social-wall-container">
                <p>Posts</p>
                <p>Tweets</p>
                <p>Instagram</p>
                <ItemComponent itemImage={this.state.image} items={this.state.items}></ItemComponent>
                {this.state.results.map}
                <button onClick={this.loadMore}>Load more...</button>
            </div>
        )
    }

}

export default SocialWallContainer;