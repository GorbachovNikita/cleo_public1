import React from 'react';
import Header from '../../components/Header/Header';
import SMSList from './SMSList/SMSList';
import Fiters from '../../components/Filters/Filters';
import { labels, options } from '../../consts/options';
import '../../styles/containerCards.css';

const SMS = () => {

  return (
    <>
    <Header />
    <div className='container-cards'>
        <Fiters
          labels={labels}
          options={options}
        />
        <SMSList labels={labels} options={options}/>
    </div>
    </>
  );
};

export default SMS;