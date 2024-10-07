import React, { useState } from 'react';
import CardItem from '../../../components/CardItem/CardItem';
import '../../../styles/styleCards.css';
import { cardSMS } from '../../../helpers/CardData';
import Search from '../../../components/Search/Search';
import FilterIcon from '../../../assets/icons/filters.svg';
import Filters from '../../../components/Filters/Filters'

const SMSList = ({ labels, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card-list">

      <div className='item-header'>
        <h1 className='item-title'>SMS</h1>
      </div>

      <Search />

      <div className="filter-container">
        <button className="filter-button" aria-label="Filter" onClick={toggleFilters}>
          <img src={FilterIcon} alt="Filter" className="icon-filter" />
        </button>
      {isOpen && <Filters isOpen={isOpen} setIsOpen={setIsOpen} labels={labels} options={options} />}
    </div>
      
      <div className='grid-card'>
       {cardSMS.map((card) => (
          <CardItem
            key={card.id}
            title={card.title}
            stock={card.stock}
            price={card.price}
          />
        ))}
      </div>

      <div className="btnContent-cards">
        <button className="btn-cards">Load More</button>
      </div>
    </div>
  );
};

export default SMSList;