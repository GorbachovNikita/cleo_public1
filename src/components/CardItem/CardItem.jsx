import React from 'react';
import './CardItem.css';

const CardItem = ({ title }) => {

  return (
    <div className="list-block">

      <div className='item-header'>
        <h1 className='item-title'>{title}</h1>
      </div>

      <div className='block-warning'>
        <p className='warning'>
          Coming soon,<br/>
          stay tuned for the updates!
        </p>
      </div>
    </div>
  );
};

export default CardItem;