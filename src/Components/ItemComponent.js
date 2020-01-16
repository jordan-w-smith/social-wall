import React from 'react';
import './ItemComponent.css'
import '../assets/instagram-logo.png'
import Linkify from 'react-linkify'
import ReactAutoLinker from 'react-autolinker'
import AutoLinker from 'autolinker'
const ItemComponent = (props) => {
    return (
        props.results.map((item) => {
            return (
                <>
                        {/* Post */}
                        {typeof item.item_data.text !== 'undefined' && props.filter === 'posts' | props.filter === 'all' ? 
                            <div className="item-box">
                                <div className="label">AFF</div>
                                <object data={item.item_data.image_url} type="image/png" codetype="image/png">alt</object>
                                {/* <img src={typeof item.item_data.image_url !== 'undefined' ? fetch(item.item_data.image_url, {mode: 'no-cors', headers:{credentials: 'omit'}}) : ""}></img> */}
                                <p>{item.item_data.text}</p>
                                <a href={item.item_data.link} target="_blank">{item.item_data.link_text}</a>
                            </div>
                        : ""}
                        {/* Twitter */}
                        {typeof item.item_data.tweet !== 'undefined' && props.filter === 'tweets' | props.filter === 'all' ? 
                            <div className="item-box">
                                <div className="label">
                                    <img src={require("../assets/Twitter_Logo_WhiteOnImage.png")} className="twitter-logo" alt="twitter"></img>
                                </div>
                                <p><ReactAutoLinker text={item.item_data.tweet}></ReactAutoLinker></p>
                                    {/* <p>{item.item_data.tweet}</p> */}
 
                                <p><ReactAutoLinker text={"- @" + item.item_data.user.username}></ReactAutoLinker></p>
                            </div>
                        : ""}
                        {/* Instagram */}
                        {item.service_name === "Instagram" && typeof item.item_data.image!== 'undefined' && props.filter === 'instagram' | props.filter === 'all' ? 
                            <div className='item-box'>
                                <div className="label">
                                    <img className="instagram-logo" src={require("../assets/instagram-logo.png")}></img>
                                </div>
                                <img src={item.item_data.image.medium}></img>
                                <p><ReactAutoLinker hashtag={true} text={item.item_data.caption}></ReactAutoLinker></p>

                            </div>
                        : ""}
                </>
            )

        })
    )
}


export default ItemComponent;