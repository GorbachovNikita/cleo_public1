import React from 'react';
import cleopatra_img from '../assets/img/cleopatra.png'
import './cleopatraImg.component.css'

const CleopatraImage = () => {
    return (
        <img alt="cleopatra image" src={cleopatra_img} className="cleopatraImg"/>
    );
};

export default CleopatraImage;