import React, { useState } from 'react';
import CardsItem from '../CardsItem/CardsItem';
import './CardList.css';
import { cardData } from '../../../helpers/CardData';
import Search from '../../../components/Search/Search';
import FilterIcon from '../../../assets/icons/filters.svg';
import Filters from '../../../components/Filters/Filters'

const CardList = ({ labels, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card-list">

      <div className='item-header'>
        <h1 className='item-title'>Cards</h1>
      </div>

      <Search />

      <div className="filter-container">
        <button className="filter-button" aria-label="Filter" onClick={toggleFilters}>
          <img src={FilterIcon} alt="Filter" className="icon-filter" />
        </button>
      {isOpen && <Filters isOpen={isOpen} setIsOpen={setIsOpen} labels={labels} options={options} />}
    </div>
      
      <div className='grid-card'>
       {cardData.map((card) => (
          <CardsItem
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

export default CardList;