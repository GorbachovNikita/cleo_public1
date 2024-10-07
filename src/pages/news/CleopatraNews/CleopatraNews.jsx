import React from 'react';
import './CleoNews.page.css';
import cleoNewsImage from"../../../assets/img/cleoNews.png"

const CleoNews = () => {
    return (
        <div className='news'>
            <img src={cleoNewsImage} alt="News" className="image-news" /> 
            <h1 className='title-news'>Cleo’s news</h1>
            <p className="description-news">
                Welcome to Cleopatra Shop! Here you will 
                find a wide range of cards, great deals and great prices. On this page 
                you can read our store news and learn about new promotions. Enjoy your shopping!
            </p>
        </div>
    );
};

export default CleoNews;