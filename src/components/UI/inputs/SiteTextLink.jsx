import React from 'react';
import {Link} from "react-router-dom";
import './SiteTextLink.page.css'

const SiteTextLink = (props) => {
    return (
        <Link to={props.to} className="siteTextLink">{props.text}</Link>
    );
};

export default SiteTextLink;