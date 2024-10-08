import React from 'react';
import Header from '../../components/Header/Header';
import CardItem from '../../components/CardItem/CardItem';
import '../../styles/containerCards.css';

const Logs = () => {

  return (
    <>
    <Header />
    <div className='container-cards'>
      <CardItem title={'Logs'}/>
    </div>
    </>
  );
};

export default Logs;