import React from 'react';
import './News.page.css';
import  NewsCards from'../NewsCards/NewsCards';
import CleoNews from '../CleopatraNews/CleopatraNews';
import Header from '../../../components/Header/Header';
import CryptoBlock from '../../../components/CryptoBlock/CryptoBlock';
import Banner from '../../../components/Banner/Banner';

const News = () => {
    return (
     <>
      <Header />
        <div className='container'>
        <Banner position="left" width='156px' height='565px' className='banner-news'/>
          <div className='left-column'>
            <CleoNews />
               {/* <CryptoBlock /> */}
            <NewsCards />
            <Banner position="bottom" height='150px' className='banner-new_bottom'/> {/* Нижний баннер под новостями */}
          </div>
          <div>
            <CryptoBlock />
            <Banner position="bottom" width='156px' height='274px' className='banner-news'/> {/* Нижний баннер под криптовалютами */}
        </div>
      </div>
     </>
  );
};

export default News;