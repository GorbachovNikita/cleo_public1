import React, { useEffect } from 'react';
import './Filters.css';
import CustomSelect from '../Select/Select';
import { InputRange } from '../InputRange/InputRange';
import CloseIcon from '../../assets/icons/close.svg';
import Search from '../Search/Search';

const Fiters = (props) => {
  const {labels, options, isOpen, setIsOpen } = props;

  // Эффект для блокировки прокрутки
  useEffect(() => {
    // Блокируем прокрутку при открытии
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Очистка эффекта при размонтировании или изменении состояния
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

    return (
      <div className={`${isOpen ? "overlay": ""}`}>
        <div className={`block-filters ${isOpen ? "open" : ""}`}>
           <div className='filter-header'>
              <h3 className='filter-title'>Filters</h3>
            <button className='close-button' onClick={() => setIsOpen(false)}>
                <img src={CloseIcon} alt='Close' className='close-icon'/>
            </button>
      </div>

      {
        labels.map((label) => {
            return <CustomSelect key={label} label={label} options={options}/>
        })
      }

      <Search />
         
        <div className='select'>
          <p className='select-p'>Price, $</p>
            <InputRange />
          <div className='select-div'>
            <span className='select-number'>0</span>
            <span className='select-number'>100</span>
          </div>
        </div>

        <div className='btn-filter-container'>
            <button className='apply-filter btn-filter'>
                Apply
            </button>
            <button className='clear-filter btn-filter'>
                Clear all
            </button>
            </div>
        </div>
        </div>
    );
};

export default Fiters;