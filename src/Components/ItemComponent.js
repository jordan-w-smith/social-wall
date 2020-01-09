import React from 'react';
import './ItemComponent.css'

const ItemComponent = (props) => {
    let singleItem = props.items.map(item => item.item_name)

    return (
        props.items.map((item) => {
            console.log(typeof item.item_data.image_url !== 'undefined' ? item.item_data.image_url : "https://google.com")
        return(
        <>
            <div className="item-box">
                <img src='https://via.placeholder.com/200'></img>
                <p>{item.item_data.text}</p>
                <a href={item.item_data.link}>{item.item_data.link_text}</a>
            </div>
            
        </>
        )
        })
    )
}

export default ItemComponent;
