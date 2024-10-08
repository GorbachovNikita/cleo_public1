import React from 'react';
import { Link } from 'react-router-dom';
import './Label.css';

const Label = () => {

  return (
    <div className='label'>
       <Link to="/" aria-label="News">
          <h1 className='titleShop'>
            Cleopatra’s
            .shop
        </h1>
       </Link>
    </div>
  );
};

export default Label;