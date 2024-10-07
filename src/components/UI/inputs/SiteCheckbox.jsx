import React from 'react';
import './SiteCheckbox.component.css'

const SiteCheckbox = (props) => {
    return (
        <input type="checkbox" className="siteCheckbox" onClick={props.function}/>
    );
};

export default SiteCheckbox;