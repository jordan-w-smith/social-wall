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

    setFilter(filter) {
        this.setState({
            filter: filter
        })
    }

    render() {
        return(
            <div className="social-wall-container">
                {/* <select>
                    <option onClick={this.setFilter}>Posts</option>
                    <option onClick={this.setFilter}>Tweets</option>
                    <option onChange={this.setFilter}>Instagram Posts</option>
                </select> */}
                <p onClick={() => this.setFilter('posts')}>Posts</p>
                <p onClick={() => this.setFilter('tweets')}>Tweets</p>
                <p onClick={() => this.setFilter('instagram')}>Instagram</p>

                <PostsContainer filter={this.state.filter} results={this.state.results}></PostsContainer>
                {this.state.results.map}
                <button onClick={this.loadMore}>Load more...</button>
            </div>
        )
    }

}

export default SocialWallContainer;