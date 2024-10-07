import React from 'react';
import './SiteInput.component.css'

const SiteInput = (props) => {
    return (
        <input placeholder={props.placeholder} className="siteInput"/>
    );
};

export default SiteInput;