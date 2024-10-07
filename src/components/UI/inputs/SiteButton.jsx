import React from 'react';
import './SiteButton.component.css'

const SiteButton = (props) => {
    return (
        <button onClick={props.function} className={`siteButton ${props.classes}`}>{props.value}</button>
    );
};

export default SiteButton;