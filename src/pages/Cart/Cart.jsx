import React from 'react';
import Header from '../../components/Header/Header';
import CartBlock from './CartBlock/CardtBlock';
import Banner from '../../components/Banner/Banner';
import './Cart.css';

const Carts = () => {
    return (
    <>
    <Header />
    <div className='container-carts'>
        <Banner position="left" width='' height='' className='banner-left_carts'/>
        <CartBlock />
    </div>
    </>
    );
};

export default Carts;