import React from 'react';
import './Header.css'
import Label from '../Label/Label';
import Tabs from '../Tabs/Tabs';
import Menu from '../Menu/Menu'

const Header = () => {

  return (
    <div>
        <Label />
      <div className='header_content-right'>
        <Tabs />
        <Menu />
      </div>
    </div>
  );
};

export default Header;