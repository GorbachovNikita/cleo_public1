import React from 'react';
import './PaymentBlock.css';
import PaymentQA from '../../../assets/img/payment-qa.png';

const PaymentBlock = () => {
  return (
    <div className='payment-container'>
      <div className='payment-block_qa'>
        <p className='payment-title'>Address:</p>
         <img src={PaymentQA} alt="QR-код" className='img-qr'/>
      </div>
      
      <div className='payment-block'>
        <p className='payment-title'>You give away:</p>
      
      <div className='input-container'>
          <div className="dropdown">
            <select id="bank" className='select-bank'>

          </select>
            <span className='input_payment'>Min: 2$</span>
            <span className="arrow-payment"></span>
          </div>

        <div className='input-block_payment'>
            <input placeholder='Enter the mount' className='input-payment'/>
            <span className='input_payment'>Max: 20000$</span>
        </div>

        <div className="dropdown">
            <select id="currency" className='select-payment' >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
             <option value="BTC">BTC</option>
            </select>
            <span className="arrow-payment"></span>
        </div>

      </div>

      <p className='payment-title'>You receive:</p>
      <div className='input-mount'>
      <div>
        <p className='payment-title-tin'>The amount:</p>
        <input placeholder='mount' className='input-payment'/>
      </div>
      <div>
        <p className='payment-title-tin'>Taking into account the commission:</p>
        <input placeholder='mount' className='input-payment'/>
      </div>
      </div>

      <button className='payment-btn'>Proceed to payment</button>
      </div>
    </div>
  )
}

export default PaymentBlock;