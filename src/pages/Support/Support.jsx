import React from 'react'
import Header from "../../components/Header/Header";
import SupportBlock from './SupportBlock/SupportBlock';

const Support = () => {

    return (
        <div>
            <Header/>
            <div className='container'>
                <SupportBlock />
            </div>
        </div>
    );
};

export default Support;