import React from 'react'
import './Banner.scss';

function banner() {
    return (
        <div className="banner containerflex">
            <h2 className="contentflex">Place with the best Stock Strategies to invest</h2>    
        </div>
    )
}
/* 
<div className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
            <div className="carousel-item active banner__carousel-item">
                <img
                srcSet="
                    ../../media/cryptobackground-Mobile.jpg  800w,
                    ../../media/cryptobackground.jpg        1000w
                "
                className="imagebanner2 d-block w-100"
                alt=""
                />
            </div>
            <div className="carousel-item banner__carousel-item">
                <img
                srcSet="
                    ../../media/stockbackground-Mobile.jpg  800w,
                    ../../media/stockbackground.jpg        1000w
                "
                className="imagebanner3 d-block w-100"
                alt=""
                />
            </div>
            <div className="carousel-item banner__carousel-item">
                <img
                srcSet="
                    ../../media/stockbackground2-mobile.jpg  800w,
                    ../../media/stockbackground2.jpg        1000w
                "
                className="imagebanner4 d-block w-100"
                alt=""
                />
            </div>
            </div>
        </div>
*/
banner.propTypes = {

}

export default banner

