import React from 'react';
import default_image from '../../../assets/img/faq/default_image.svg';

const FaqBlock = (props) => {

    if (props.img !== undefined) {
        return (
            <div>
                <p className="faq_content_title">{props.id}. {props.title}</p>
                <p>{props.description}</p>
                <img src={default_image} alt="default img"/>
            </div>
        )
    } else {
        return (
            <div>
                <p className="faq_content_title">{props.id}. {props.title}</p>
                <p>{props.description}</p>
            </div>
        )
    }
};

export default FaqBlock;