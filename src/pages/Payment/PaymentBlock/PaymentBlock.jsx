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

    <div>
        <img src={PaymentQA} alt="QR-код" className='img-qr'/>
        <div className='copy-block'>
          <p className='payment-title'>Address</p>
          <button className='copy'>Copy</button>
        </div>
    </div>
      
    <div className='payment-block'>
        
        <div className="dropdown">
            <select id="currency" className='select-payment' >
              <option value="BTC" className='option-pay'>BTC</option>
              <option value="LTC" className='option-pay'>LTC</option>
              <option value="HMR" className='option-pay'>HMR</option>
              <option value="USDT TRC 20" className='option-pay'>USDT TRC 20</option>
              <option value="USDT TON" className='option-pay'>USDT TON</option>
              <option value="USDT ERS 20" className='option-pay'>USDT ERS 20</option>
              <option value="TON" className='option-pay'>TON</option>
              <option value="KRYPTO BOT" className='option-pay'>KRYPTO BOT</option>
            </select>
            <span className="arrow-payment"></span>
        </div>

        <div className='input-container'>
          <input placeholder='Enter the mount' className='input-payment'/>
        </div>

      <p className='payment-title'>Minimum deposit amount: 2$ </p>
      
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