import React from 'react';
import Header from '../../components/Header/Header';
import LogsList from './LogsList/LogsList';
import Fiters from '../../components/Filters/Filters';
import { labels, options } from '../../consts/options';
import '../../styles/containerCards.css';

const Logs = () => {

  return (
    <>
    <Header />
    <div className='container-cards'>
        <Fiters
          labels={labels}
          options={options}
        />
        <LogsList labels={labels} options={options}/>
    </div>
    </>
  );
};

export default Logs;