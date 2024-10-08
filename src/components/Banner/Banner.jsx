import React from 'react';
import './Banner.css';
import classnames from 'classnames';

const Banner = ({ width = '100%', height = '200px', className }) => {
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

    const classes = classnames('banner', className); 

    return (
        <div className={classes} style={bannerStyle}>
        </div>
    );
};

export default Banner;