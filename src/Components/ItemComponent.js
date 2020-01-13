import React from 'react';
import './ItemComponent.css'
const ItemComponent = (props) => {
    return (
        props.results.map((item) => {
            
            return (
                <>
                    <div className="item-box">
                        <p>{item.service_name}</p>
                        {/* <div className="image" id="img">hey<img src={item.item_data.image_url}></img></div> */}
                        <img src={typeof item.item_data.image_url !== 'undefined' ? 'https://via.placeholder.com/200' : ""}></img>
                        <p>{item.item_data.text}</p>
                        <p>{typeof item.item_data.tweet !== 'undefined' ? item.item_data.tweet.split('http') : ""}</p>
                        <p>{item.service_name === "Twitter" ? "- @" + item.item_data.user.username : ''}</p>
                        <img src={item.service_name === "Instagram" ? item.item_data.image.medium: ''}></img>
                        <p>{item.service_name === "Instagram" ? item.item_data.caption : ""}</p>
                        <p className="hashtag">{item.service_name === "Instagram" ? item.item_data.tags.map(tag => '#' + tag + " ") : ""}</p>

                        <a href={item.item_data.link} target="_blank">{item.item_data.link_text}</a>
                        
                    </div>

                </>
            )

        })
    )
}

export default ItemComponent;
