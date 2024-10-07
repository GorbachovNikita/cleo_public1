import React from 'react';
import Header from '../../components/Header/Header';
import CartBlock from './CartBlock/CardtBlock';
import Banner from '../../components/Banner/Banner';

const Carts = () => {
    return (
    <>
    <Header />
    <div className='container'>
        <Banner position="left" width='156px' height='565px'/>
        <CartBlock />
    </div>
    </>
    );
};

export default Carts;