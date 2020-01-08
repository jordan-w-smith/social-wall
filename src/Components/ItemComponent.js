import React from 'react';

const ItemComponent = (props) => {
    let singleItem = props.items.map(item => item.item_name)

    return (
        props.items.map((item) => {
        return(
        <>
            <p>{item.item_name}</p>
            <img src={item.item_data.image_url}></img>
        </>
        )
        })
    )
}

export default ItemComponent;
