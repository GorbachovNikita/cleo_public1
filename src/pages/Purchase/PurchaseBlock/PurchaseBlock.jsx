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

    const [totalPrice, setTotalprice] = useState(0)
    const [totalQuantity, setTotalQuantity] = useState(0)

    const [loading, setLoading] = useState(true)
    const [purchasesData, setPurchasesData] = useState(<p>No purchases have been made at the moment</p>)
    const [productData, setProductData] = useState('')

    const getPurchasesListFunction = async () => {

        const response = await user.getPurchasesList()

        return response
    }

    const [isModalOpen, setModalOpen] = useState(false)

    const handleCardClick = (title, description, uuid, quantity, price) => {

        const response = user.getPositionByPurchare(uuid)

        if (Object.keys(response).length !== 0) {

            setTotalprice(price)
            setTotalQuantity(quantity)

            setProductData(response.map((item, index) =>
                <React.Fragment key={index + 1}>
                    <div className='product-card'>
                        <div className='prod-block'>
                            <div className='purchase-img'></div>
                            <p className='card-prod-title'>Card {item.bin}</p>
                        </div>
                        <div className='purchase-details'>
                            <div className='purchase-price'>
                                <span className='purchase-cash'></span>
                            </div>
                            <div className='purchase-quantity'>
                                <span className='quantity'></span>
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
                            onClick={() => handleCardClick(item.title, item.description, item.uuid, item.quantity, item.paid_amount)}
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
                    <div className='discount-block' style={{display: 'none'}}>
                        <p className='discount-title'>Discount</p>
                        <span className='discount-cash'>-10%</span>
                    </div>

                    <div className='discount-block total-container'>
                        <p>Total</p>
                        <div className='total-block'>
                            <span className='purchase-total'>{totalPrice}$</span>
                            <span className='quantity'>{totalQuantity}</span>
                        </div>
                    </div>
                </div>

            </Modal>
            
        </div>
    )
}

export default PurchaseBlock;