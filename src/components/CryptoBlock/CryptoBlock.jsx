import React from 'react';
import './CryptoBlock.css';
import CryptoIcon from '../../assets/icons/crypto.svg';


const CryptoBlock = () => {
    return (
        <div className='crypto-block'>
        <div className='crypto-header'>
          <h1 className='crypto-title'>Crypto</h1>
          <div className='icon-block'>
            <img src={CryptoIcon} alt="Crypto" className='icon-crypto'/>
            <span className='span-crypto'> = 0,000015 USD</span>
          </div>
        </div>
        </div>
    );
};

export default CryptoBlock;