import React from 'react';
import '../../styles/containerCards.css';
import Header from '../../components/Header/Header';
import CardList from './CardList/CardList';
import Fiters from '../../components/Filters/Filters';
import { labels, options } from '../../consts/options';

const Cards = () => {

  return (
    <>
    <Header />
    <div className='container-cards'>
        <Fiters
          labels={labels}
          options={options}
        />
        <CardList labels={labels} options={options}/>
    </div>
    </>
  );
};

export default Cards;