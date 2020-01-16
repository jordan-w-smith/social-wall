import React from 'react';
import ItemComponent from '../Components/ItemComponent'
import './SocialWallContainer.css'
import PostsContainer from './PostsContainer';
class SocialWallContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [],
            results: [],
            filter: "all"
        };
        this.loadMore = this.loadMore.bind(this)
        this.setFilter = this.setFilter.bind(this)
    }

    componentDidMount() {
        fetch('https://private-cc77e-aff.apiary-mock.com/posts')
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

    setFilter(filter) {
        this.setState({
            filter: filter
        })
    }

    render() {
        return(
            <div className="social-wall-container">
                <div className="filter">
                <p onClick={() => this.setFilter('posts')}>Posts</p>
                <p onClick={() => this.setFilter('tweets')}>Tweets</p>
                <p onClick={() => this.setFilter('instagram')}>Instagram</p>
                </div>
                
                <PostsContainer filter={this.state.filter} results={this.state.results}></PostsContainer>
                {this.state.results.map}
                <button onClick={this.loadMore}>Load more...</button>
            </div>
        )
    }

}

export default SocialWallContainer;