import React from 'react';
import './ItemComponent.css'
import '../assets/instagram-logo.png'
import Linkify from 'react-linkify'
const ItemComponent = (props) => {
    let loopCount = 0;
    return (
        props.results.map((item) => {
            loopCount += 1;
            return (
                <>
                        {/* Post */}
                        {typeof item.item_data.text !== 'undefined' && props.filter === 'posts' | props.filter === 'all' ? 
                            <div className="item-box">
                                <div className="label">AFF</div>
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
                                <Linkify properties={{target: '_blank'}}>
                                    <p>{typeof item.item_data.tweet !== 'undefined' && props.filter === 'tweets' | props.filter === 'all' ? item.item_data.tweet : ""}</p>
                                </Linkify>
                                <p>{typeof item.item_data.tweet !== 'undefined' && props.filter === 'tweets' | props.filter === 'all' ? "- @" + item.item_data.user.username : ''}</p>
                            </div>
                        : ""}
                        {/* Instagram */}
                        {typeof item.item_data.image!== 'undefined' && props.filter === 'instagram' | props.filter === 'all' ? 
                            <div className='item-box'>
                                <div className="label">
                                    <img className="instagram-logo" src={require("../assets/instagram-logo.png")}></img>
                                </div>
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