import React from 'react';
import './ItemComponent.css'
import '../assets/instagram-logo.png'
import ReactAutoLinker from 'react-autolinker'
const ItemComponent = (props) => {
    function instagramHashtag(str) {
        str = str.replace(/[#]+[A-Za-z0-9_]+/g, function (s) {
            var hashtag = s.replace('#', '');
            return s.link("https://www.instagram.com/explore/tags/" + hashtag);
        });
        return str;
    }
    function twitterHashtag(str) {
        str = str.replace(/[#]+[A-Za-z0-9_]+/g, function (s) {
            var hashtag = s.replace('#', '');
            return s.link("http://search.twitter.com/search?q=" + hashtag);
        });
        return str;
    }

    return (
        props.results.map((item) => {
            return (
                <>
                    {/* Post */}
                    {typeof item.item_data.text !== 'undefined' && props.filter === 'posts' | props.filter === 'all' ?
                        <div className="item-box">
                            <div className="label">AFF</div>
                            <object data={item.item_data.image_url} type="image/png" codetype="image/png">alt</object>
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
                            <p><ReactAutoLinker text={twitterHashtag(item.item_data.tweet)}></ReactAutoLinker></p>
                            <p><ReactAutoLinker text={"- @" + item.item_data.user.username}></ReactAutoLinker></p>
                        </div>
                        : ""}
                    {/* Instagram */}
                    {item.service_name === "Instagram" && typeof item.item_data.image !== 'undefined' && props.filter === 'instagram' | props.filter === 'all' ?
                        <div className='item-box'>
                            <div className="label">
                                <img className="instagram-logo" src={require("../assets/instagram-logo.png")}></img>
                            </div>
                            <img src='http://via.placeholder.com/300/300'></img>
                            <p dangerouslySetInnerHTML={{ __html: instagramHashtag(item.item_data.caption) }}></p>

                        </div>
                        : ""}
                </>
            )

        })
    )
}


export default ItemComponent;