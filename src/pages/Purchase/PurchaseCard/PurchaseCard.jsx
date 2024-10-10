import React from 'react';
import './PurchaseCard.css';

const PurchaseCard = ({number, bin, uuid, date, onClick}) => {

    let purchaseDate = date.split('T').slice(0, 10)[0].split('-')
    purchaseDate = purchaseDate[2] + '.' + purchaseDate[1] + '.' + purchaseDate[0]

    return (
        <div className='purchase-card' uuid={uuid} onClick={onClick}>
            <div className='purchase-cont'>
                <p className='purchase-style_number'>{number}</p>
                <h4 className='purchase-title'>Purchase #{bin}</h4>
            </div>
            <p className='purchase-style'>{purchaseDate}</p>

            <span className='decor-purchase'></span>
        </div>
    );
};

export default PurchaseCard;