import React, { useEffect } from 'react';
import './Modal.css';
import Portal from '../../Portal/Portal';
import CloseIcon from '../../../assets/icons/close.svg';

const Modal = ({ isOpen, onClose, children }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
    }
     // Добавляем обработчик события нажатия клавиши
    document.addEventListener('keydown', handleKeyDown);

    // Удаляем обработчик события при размонтировании компонента
    return () => {
         document.removeEventListener('keydown', handleKeyDown);
    };
    }, [onClose]);


    if (!isOpen) {
        return null;
    }

    return (
        <Portal id="modal-root">
            <div className='modal-overlay'  onClick={onClose}>
                <div className='modal-content' onClick={e => e.stopPropagation()}>
                    <button 
                      onClick={onClose}
                      className='button-close'
                    >
                       <img src={CloseIcon} alt="Close" className='modal-close'/>
                       <span className='close-text'>X</span>
                    </button>
                    {children}
                </div>
            </div>
        </Portal>
    );
};


export default Modal;