import React from 'react';
import Header from '../../components/Header/Header';
import '../../styles/containerCards.css';
import PurchaseBlock from './PurchaseBlock/PurchaseBlock'

const Purchase = () => {

  return (
    <>
    <Header />
    <div className='container-cards'>
        <PurchaseBlock />
    </div>
    </>
  );
};

export default Purchase;