import React from 'react';
import './CartBlock.css';
import ProductBlock from '../ProductBlock/ProductBlock';
import OrderBlock from '../OrderBlock/OrderBlock'

const CartBlock = () => {
    return (
        <div className='cart-container'>
            <div className='cart-header'>
              <h1 className='cart-title'>Cart</h1>
            </div>

            <div className='cart-block'>
              <ProductBlock />
              <OrderBlock />
            
        </div>
      </div>
    );
};

export default CartBlock;