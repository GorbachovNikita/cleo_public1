import React from 'react';
import './ProductBlock.css';
import DotsIcon from '../../../assets/icons/dots.svg';

export const products = [
    { id: 1, title: 'Card 315684', quantity: 0, price: '-10$' },
    { id: 2, title: 'Card 315684', quantity: 0, price: '-10$' },
    { id: 3, title: 'Card 315684', quantity: 0, price: '-10$' },
];

const ProductBlock = () => {
    return (
     <div className='product-cart'>
            <div className='product-row'>
                <p className='product-title'>Product</p>
                <div className='text-right'>
                    <p className='product-title quantity-title'>Quantity</p>
                    <p className='product-title total-title'>Total</p>
                </div>
            </div>

            {products.map((product) => (
                <React.Fragment key={product.id}>
                    <span className='decor-prod'></span>
                    <div className='product-card'>
                        <div className='prod-block'>
                            <div className='prod-checkpoint'></div>
                            <div className='prod-img'></div>
                            <p className='card-prod-title'>{product.title}</p>
                        </div>

                        <div className='counter-block'>
                            <div className='counter-controls prod-controls'>
                                <button className='counter-btn prod'>+</button>
                                <p className='counter-value prod'>{product.quantity}</p>
                                <button className='counter-btn prod'>-</button>
                            </div>

                            <div className='dots'>
                                <img src={DotsIcon} alt="Dots" className="icon-dots" />
                                <span className='prod-cash'>{product.price}</span>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            ))}
        </div>
    );
};

export default ProductBlock;