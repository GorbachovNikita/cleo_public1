import React, { useState } from 'react';
import './PurchaseBlock.css';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import Modal from '../../../components/UI/Modal/Modal';

const purchaseData = [
    { id: 1, title: 'Purchase #7378328', date: '24.09.2024'},
    { id: 2, title: 'Purchase #7378328', date: '18.09.2024'},
    { id: 3, title: 'Purchase #7378328', date: '07.09.2024'},
];

export const purchase = [
    { id: 1, title: 'Card 315684', quantity: 3, price: '15$' },
    { id: 2, title: 'Log 325644', quantity: 4, price: '15$' },
    { id: 3, title: 'Proxy 189273', quantity: 1, price: '15$' },
];



const PurchaseBlock = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='purchase-container'>
            <div className='purchase-header'>
               <h1 className='purchase-block_title'>My Purchase</h1>
            </div>

            <div className='purchase-block'>
               {purchaseData.map((item, index) => (
                    <PurchaseCard
                        key={item.id}
                        number={index + 1}
                        title={item.title}
                        date={item.date}
                        onClick={() => handleCardClick(item.title, item.description)}
                    />
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <div className='purchase-row'>
                  <p className='purchase-title_modal'>Position</p>
                <div className='purchase-right'>
                    <p className='purchase-title_modal price-title'>Price</p>
                   <p className='purchase-title_modal quantity-title'>Quantity</p>
                 </div>
               </div>
                <span className='purchase-dec'></span>

            {purchase.map((product) => (
            <React.Fragment key={product.id}>
            <div className='product-card'>
              <div className='prod-block'>
                <div className='purchase-img'></div>
                <p className='card-prod-title'>{product.title}</p>
              </div>
            <div className='purchase-details'>
                <div className='purchase-price'>
                    <span className='purchase-cash'>{product.price}</span>
                </div>
                <div className='purchase-quantity'>
                    <span className='quantity'>{product.quantity}</span>
                </div>
               </div>
             </div>
           
            <span className='purchase-prod'></span>
            </React.Fragment>
             ))}
            
            <div className='purchase-footer'>
              <div className='discount-block'>
                 <p className='discount-title'>Discount</p>
                <span className='discount-cash'>-10%</span>
            </div>

            <div className='discount-block total-container'>
                <p>Total</p>
            <div className='total-block'>
                <span className='purchase-total'>45$</span>
                <span className='quantity'>8</span>
            </div>
            </div>

            </div>
            </Modal>
            
        </div>
    )
}

export default PurchaseBlock;