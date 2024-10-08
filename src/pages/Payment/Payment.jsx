import React from 'react';
import Header from '../../components/Header/Header';
import PaymentBlock from './PaymentBlock/PaymentBlock'

const Payment = () => {

  return (
    <>
    <Header />
    <div className='container'>
        <PaymentBlock />
    </div>
    </>
  );
};

export default Payment;
