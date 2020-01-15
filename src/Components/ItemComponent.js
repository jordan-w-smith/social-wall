import React from 'react';
import './ItemComponent.css'
import '../assets/instagram-logo.png'
const ItemComponent = (props) => {
    return (
        props.results.map((item) => {
            return (
                <>
                        {/* Post */}
                        
                        {typeof item.item_data.text !== 'undefined' && props.filter === 'posts' | props.filter === 'all' ? 
                            <div className="item-box">
                                <div className="label">AFF</div>
                                <p>{item.service_name === "Manual" && props.filter === 'posts' | props.filter === 'all' ? item.service_name : ''}</p>
                                <img src={props.filter === 'posts' | props.filter === 'all' && typeof item.item_data.image_url !== 'undefined' ? item.item_data.image_url : ""}></img>
                                <p>{props.filter === 'posts' || props.filter === 'all' ? item.item_data.text : ''}</p>
                                <a href={props.filter === 'posts' || props.filter === 'all' ? item.item_data.link : ''} target="_blank">{props.filter === 'posts' || props.filter === 'all' ? item.item_data.link_text : ''}</a>
                            </div>
                        : ""}
                        {/* Twitter */}
                        {typeof item.item_data.tweet !== 'undefined' && props.filter === 'tweets' | props.filter === 'all' ? 
                            <div className="item-box">
                                <div className="label">
                                    <img src={require("../assets/Twitter_Logo_WhiteOnImage.png")} className="twitter-logo" alt="twitter"></img>
                                </div>
                                <p>{item.service_name === "Twitter" && props.filter === 'tweets' | props.filter === 'all' ? item.service_name : ''}</p>
                                <p>{typeof item.item_data.tweet !== 'undefined' && props.filter === 'tweets' | props.filter === 'all' ? item.item_data.tweet : ""}</p>
                                <p>{typeof item.item_data.tweet !== 'undefined' && props.filter === 'tweets' | props.filter === 'all' ? "- @" + item.item_data.user.username : ''}</p>
                            </div>
                        : ""}
                        {/* Instagram */}
                        {typeof item.item_data.image!== 'undefined' && props.filter === 'instagram' | props.filter === 'all' ? 
                            <div className='item-box'>
                                <div className="label">
                                    <img className="instagram-logo" src={require("../assets/instagram-logo.png")}></img>
                                </div>
                                <p>{item.service_name === "Instagram" && props.filter === 'instagram' | props.filter === 'all' ? item.service_name : ''}</p>
                                <img src={item.service_name === "Instagram" && props.filter === 'instagram' | props.filter === 'all' ? item.item_data.image.medium : ''}></img>
                                <p>{item.service_name === "Instagram" && props.filter === 'instagram' | props.filter === 'all' ? item.item_data.caption : ""}</p>
                                <p className="hashtag">{item.service_name === "Instagram" ? item.item_data.tags.map(tag => '#' + tag + " ") : ""}</p>
                            </div>
                        : ""}
                </>
            )

        })
    )
}

export default ItemComponent;