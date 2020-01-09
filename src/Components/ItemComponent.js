import React from 'react';
import './ItemComponent.css'

const ItemComponent = (props) => {
    let singleItem = props.items.map(item => item.item_name)

    return (
        props.items.map((item) => {
            console.log(typeof item.item_data.image_url !== 'undefined' ? item.item_data.image_url : "https://google.com")
        return(
        <>
            <p>{item.item_name}</p>
            <img src={typeof item.item_data.image_url !== 'undefined' ? item.item_data.image_url : "https://google.com"}></img>
        </>
        )
        })
    )
}

export default ItemComponent;
