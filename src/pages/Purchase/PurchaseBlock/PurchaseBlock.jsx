import React, {useContext, useEffect, useState} from 'react';
import './PurchaseBlock.css';
import PurchaseCard from '../PurchaseCard/PurchaseCard';
import Modal from '../../../components/UI/Modal/Modal';
import {Context} from "../../../index";

export const purchase = [
    { id: 1, title: 'Card 315684', quantity: 3, price: '15$' },
    { id: 2, title: 'Log 325644', quantity: 4, price: '15$' },
    { id: 3, title: 'Proxy 189273', quantity: 1, price: '15$' },
];

const PurchaseBlock = () => {

    const {user} = useContext(Context)

    const [loading, setLoading] = useState(true)
    const [purchasesData, setPurchasesData] = useState(<p>No purchases have been made at the moment</p>)
    const [productData, setProductData] = useState('')

    const getPurchasesListFunction = async () => {

        const response = [
            {
                "uuid": '8a53a159-f9d5-4052-af75-0e7d565febfc',
                "user": '2a53a159-f9d5-4012-af75-0e7d555febzz',
                "purchase_time": "2024-05-03T03:11:13.838720",
                "paid_amount": 0.0,
                "quantity": 1,
                "refunded_quantity": 1,
                "category": 'category',
                "country": 'country',
                "bin": 541123
            },
            {
                "uuid": '3a53a129-f9d5-5052-a8i5-0e7d565oekfe',
                "user": '2a53a159-f9d5-4012-af75-0e7d555febzz',
                "purchase_time": "2024-05-03T03:11:13.838720",
                "paid_amount": 0.0,
                "quantity": 2,
                "refunded_quantity": 0,
                "category": 'category',
                "country": 'country',
                "bin": 541124
            }
        ] //await user.getPurchasesList()

        return response
    }

    const [isModalOpen, setModalOpen] = useState(false)

    const handleCardClick = (title, description, uuid) => {

        const response = {
            'was_missing': false,
            'positions': [
                {
                    "uuid": "123fd21d-7216-4e50-b91d-fb625d95d0c7",
                    "category": "high-valid-cc-no-refund-3",
                    "country": "united-states",
                    "data": "CC_STRING",
                    "seller": "90hf0ce0-48f9-4019-97dc-1edb530dad33",
                    "upload": "654dcb3c-5996-406d-801e-fb6ae6f347ea",
                    "bin": 524452,
                    "is_loaded": true,
                    "purchase": "9hg2e55f-c2c8-4dd2-aed1-8f58cb5a7608",
                    "is_refunded": false,
                    "is_purchased": true,
                    "buyer": "0f456e68-6566-4796-a4b6-9182b5abadb1"
                },
                {
                    "uuid": "321b084c-c296-48c5-a990-9c1dd8a67a3b",
                    "category": "high-valid-cc-no-refund-3",
                    "country": "japan",
                    "data": "CC_STRING",
                    "seller": "90hf0ce0-48f9-4019-97dc-1edb530dad33",
                    "upload": "654dcb3c-5996-406d-801e-fb6ae6f347ea",
                    "bin": 461676,
                    "is_loaded": true,
                    "purchase": "768b9c88-3e2b-450e-b598-95b78ebb4523",
                    "is_refunded": false,
                    "is_purchased": true,
                    "buyer": "of456e68-6566-4796-a4b6-9182b5abadb1"
                }
            ],
            'purchase': {
                "uuid": '8a53a159-f9d5-4052-af75-0e7d565febfc',
                "user": '2a53a159-f9d5-4012-af75-0e7d555febzz',
                "purchase_time": "2024-05-03T03:11:13.838720",
                "paid_amount": 0.0,
                "quantity": 1,
                "refunded_quantity": 1,
                "category": 'category',
                "country": 'country',
                "bin": 541123
            }
        } //user.verifyPositionInPurchareByPurchare(uuid)

        if (Object.keys(response).length !== 0) {

            setProductData(response['positions'].map(item =>
                <React.Fragment key={item.id}>
                    <div className='product-card'>
                        <div className='prod-block'>
                            <div className='purchase-img'></div>
                            <p className='card-prod-title'>Card {item.bin}</p>
                        </div>
                        <div className='purchase-details'>
                            <div className='purchase-price'>
                                <span className='purchase-cash'>{item.paid_amount}</span>
                            </div>
                            <div className='purchase-quantity'>
                                <span className='quantity'>0</span>
                            </div>
                        </div>
                    </div>

                    <span className='purchase-prod'></span>
                </React.Fragment>
            ))

            setModalOpen(true)
        }
    }

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {

        const lines = document?.getElementsByClassName("decor-purchase");

        if (lines.length !== 0) {
            lines[lines.length - 1].style.display = "none";
        }

    }, [])

    useEffect(() => {

        getPurchasesListFunction().then(data => {
            if (data !== undefined) {

                if (data.length !== 0) {

                    setPurchasesData(data.map((item, index) =>
                        <PurchaseCard
                            key={index + 1}
                            number={index + 1}
                            bin={item.bin}
                            date={item.purchase_time}
                            uuid={item.uuid}
                            onClick={() => handleCardClick(item.title, item.description, item.uuid)}
                        />
                    ))

                } else {
                    console.log('An error occurred on the server side when sending the request')
                }
            }
        }).finally(() => setLoading(false))

    }, [])

    return (
        <div className='purchase-container'>
            <div className='purchase-header'>
                <h1 className='purchase-block_title'>My Purchase</h1>
            </div>

            <div className='purchase-block'>
                {purchasesData}
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

                {productData}

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