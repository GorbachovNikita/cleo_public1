import React from 'react';
import './SiteLinkButton.component.css'

const SiteLinkButton = (props) => {
    return (
        <button onClick={props.function} className="siteLinkButton">{props.text}</button>
    );
};

export default SiteLinkButton;