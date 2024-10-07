import React from 'react';
import './Banner.css';

const Banner = ({ width = '100%', height = '300px', backgroundImage = '' }) => {
    const bannerStyle = {
        width: width,
        height: height,
        // backgroundImage: `url(${backgroundImage})`,
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // color: '#fff',
        // textAlign: 'center',
    };

    return (
        <div className='banner' style={bannerStyle}>
        </div>
    );
};

export default Banner;