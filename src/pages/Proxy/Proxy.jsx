import React from 'react';
import Header from '../../components/Header/Header';
import CardItem from '../../components/CardItem/CardItem';
import '../../styles/containerCards.css';

const Proxy = () => {

  return (
    <>
    <Header />
    <div className='container-cards'>
      <CardItem title={'Proxy'}/>
    </div>
    </>
  );
};

export default Proxy;