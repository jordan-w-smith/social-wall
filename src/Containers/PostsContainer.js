import React from 'react'
import './PostsContainer.css'
import ItemComponent from '../Components/ItemComponent'

const PostsContainer = (props) => {
    return (
        <div className="posts-container">
            <ItemComponent results={props.results}></ItemComponent>
        </div>
    )

}

export default PostsContainer