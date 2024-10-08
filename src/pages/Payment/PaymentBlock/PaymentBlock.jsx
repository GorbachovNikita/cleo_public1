import React, { useState } from 'react';
import './PaymentBlock.css';
import PaymentQA from '../../../assets/img/payment-qa.png';
import Modal from '../../../components/UI/Modal/Modal';
import { Link } from 'react-router-dom';

const PaymentBlock = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  
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
              <option value="USD" className='option-pay'>USD</option>
              <option value="EUR" className='option-pay'>EUR</option>
             <option value="BTC" className='option-pay'>BTC</option>
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

      <button className='payment-btn' onClick={handleOpenModal}>
        Proceed to payment
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='modal-payment'>
          <p className='modal-payment_title'>Thank you for your purchase!</p>
          <span className='purchase-prod'></span>
          <div className='modal-content_payment'>
            <p className='modal-content_title'>Log 325644, Proxy 189273</p>
            <span className='modal-content_price'>Price: 25$</span>
          </div>
          <span className='purchase-prod'></span>

          <Link to="/" className='modal-link_payment'>Return to home</Link>
        </div>
      </Modal>

      </div>
    </div>
  )
}

export default PaymentBlock;