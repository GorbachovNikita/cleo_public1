import React from 'react';
import './PurchaseCard.css';

const PurchaseCard = ({ number, title, date, onClick }) => {
    // const reversedNumber = String(number).split('').reverse().join('');

    return (
        <div className='purchase-card' onClick={onClick}>
            <div className='purchase-cont'>
                <p className='purchase-style_number'>{number}</p>
                <h4 className='purchase-title'>{title}</h4>
            </div>
            <p className='purchase-style'>{date}</p>

            <span className='decor-purchase'></span>
        </div>
    );
};

export default PurchaseCard;