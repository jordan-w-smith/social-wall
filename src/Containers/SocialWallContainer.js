import React from 'react';
import ItemComponent from '../Components/ItemComponent'
import './SocialWallContainer.css'
import PostsContainer from './PostsContainer';
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
                items: posts.items,
                results: posts.items
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
                <PostsContainer results={this.state.results}></PostsContainer>
                {this.state.results.map}
                <button onClick={this.loadMore}>Load more...</button>
            </div>
        )
    }

}

export default SocialWallContainer;