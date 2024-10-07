import React from 'react';
import './OrderBlock.css';

const OrderBlock = () => {
    return (
            <div className='order-product'>
            <h2 className='order-title'>Order Summary</h2>
            
            <div className="cart-search-block">
                <input
                    type="text"
                    className="cart-input"
                    placeholder="Promo Code"
                    aria-label="Promo Code"
                />
                <button 
                    className="cart-search-button"
                    aria-label="Apply Promo Code"
                >
                    Apply
                </button>
            </div>
    
            <div className='price-row'>
                <p className='order-title'>Total Cards</p>
                <span className='cash'>3</span>
           </div>

            <div className='price-row'>
                <p className='order-title'>Total Cards</p>
                <span className='cash'>-10$</span>
            </div>
             
            <span className='decor'></span>

            <div className='price-row'>
                <p className='order-title'>Total Cards</p>
               <span className='cash'>45$</span>
             </div>
    
            <div className='order-button-group'>
                <button 
                    className='order-btn buy'
                >
                    Buy all
                </button>
                <button 
                    className='order-btn clear-all'
                >
                    Clear all
                </button>
            </div>
        </div>

    );
};

export default OrderBlock;