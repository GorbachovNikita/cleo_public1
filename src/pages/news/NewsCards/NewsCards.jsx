import React from 'react';
import './NewsCards.page.css';
import NewsCard from '../NewsCard/NewsCard';
import { cards } from '../../../helpers/CardList';

const NewsCards = () => {

  return (
  <>
  <div className="card-list-news">
    {cards.map((card) => (
    <NewsCard
      key={card.id}
      title={card.title}
      description={card.description}
      image={card.image}
      createdAt={card.createdAt}
    />
    ))}

    <div className='btnContent'>
      <button className="btn">
        Load More
      </button>
    </div>
   </div>
  </>
  );
};

export default NewsCards;