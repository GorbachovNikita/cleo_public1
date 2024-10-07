import React from 'react';
import Header from '../../components/Header/Header';
import ProxyList from './ProxyList/ProxyList';
import Fiters from '../../components/Filters/Filters';
import { labels, options } from '../../consts/options';
import '../../styles/containerCards.css';

const Proxy = () => {

  return (
    <>
    <Header />
    <div className='container-cards'>
        <Fiters
          labels={labels}
          options={options}
        />
        <ProxyList labels={labels} options={options}/>
    </div>
    </>
  );
};

export default Proxy;