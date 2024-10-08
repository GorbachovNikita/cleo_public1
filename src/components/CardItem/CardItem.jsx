import React, { useState } from 'react';
import './CardItem.css';
import MoneyIcon from '../../assets/icons/money.svg';

const CardItem = ({ title, stock, price, seller, country, city, brand, level, bank, bin }) => {
  const [count, setCount] = useState(1);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const openPopup = () => {
    setIsPopupVisible(true);
    document.body.style.overflow = 'hidden'; // Блокируем прокрутку
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    document.body.style.overflow = ''; // Возвращаем прокрутку
  };

  const increaseCount = () => {
    if (count < stock) setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <article className="card-item">
      <div className='card-column'>
        <h4 className='article-title'>{title}</h4>
        <div className='filter-card'>
          <p className='filter-card-title'>Seller: <span className='filter-card-span'>Seller</span></p>
          <p className='filter-card-title'>Country: <span className='filter-card-span'>Country</span></p>
          <p className='filter-card-title'>City: <span className='filter-card-span'>City</span></p>
          <p className='filter-card-title'>Brand: <span className='filter-card-span'>Brand</span></p>
          <p className='filter-card-title'>Level: <span className='filter-card-span'>Level</span></p>
          <p className='filter-card-title'>Bank: <span className='filter-card-span'>Bank</span></p>
          <p className='filter-card-title'>Bin: <span className='filter-card-span'>Bin</span></p>
        </div>
        <div className='article-counter'>
          <p className='article-p'>In stock: {stock}</p>
          <div className='counter-controls-card'>
            <button className='counter-btn' onClick={increaseCount}>+</button>
            <p className='counter-value'>{count}</p>
            <button className='counter-btn' onClick={decreaseCount}>-</button>
          </div>
        </div>
      </div>
      <div className='cleo-card_img'></div>
      <div className='article-footer'>
        <p className='article-price'>{price * count}$</p>
        <button className='article-btn' onClick={openPopup}>
          <img src={MoneyIcon} alt='Money' className='icon-money'/>
          Add to Cart
        </button>

      {/* Всплывающее окно */}
      {isPopupVisible && 
        <div className='popup'>
          <div className='popup-content'>
            <span className='close-btn' onClick={closePopup}>&times;</span>
            <p>Coming soon, stay tuned for the updates</p>
          </div>
        </div>
      }
      </div>
    </article>
  );
};

export default CardItem;