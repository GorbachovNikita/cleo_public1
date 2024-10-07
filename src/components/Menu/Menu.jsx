import React, { useState, useEffect } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import  MenuIcon from '../../assets/icons/menu.svg';
import CloseIcon from '../../assets/icons/close.svg'


const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 761); // Установите порог для мобильной версии

  // Функция для переключения состояния меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Эффект для обновления состояния при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 761);
      if (window.innerWidth >= 761) {
        setIsMenuOpen(false); // Закрывает меню при переходе на десктоп
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='menu'>
    {isMobile ? (
     <> 
      <button className='btnHeader-mobile btnHeader' aria-label="View profile" onClick={toggleMenu}>
        <img src={MenuIcon} alt="Menu" className='icon' />
      </button>

    {isMenuOpen && (
      <>
       <button className='close-button_menu' onClick={toggleMenu}>
          <img src={CloseIcon} alt='Close' className='close-icon'/>
       </button>

        <div className='overlay' onClick={toggleMenu}></div>

        <div className='menu-buttons_mobile'>
          <Link to="/cards" className='menu-button_mobile' onClick={toggleMenu}>
            Cards
          </Link>
          <Link to="/checker" className='menu-button_mobile' onClick={toggleMenu}>
            Checker
          </Link>
          <Link to="/logs" className='menu-button_mobile' onClick={toggleMenu}>
            Logs
          </Link>
          <Link to="/proxy" className='menu-button_mobile' onClick={toggleMenu}>
            Proxy
          </Link>
          <Link to="/sms" className='menu-button_mobile' onClick={toggleMenu}>
            SMS
          </Link>
        </div>
      </>
    )}
  </>) : (
        <div className='menu-buttons'>
          <Link to="/cards" className='menu-button'>
            Cards
          </Link>
          <Link to="/checker" className='menu-button'>
            Checker
          </Link>
          <Link to="/logs" className='menu-button'>
            Logs
          </Link>
          <Link to="/proxy" className='menu-button'>
            Proxy
          </Link>
          <Link to="/sms" className='menu-button'>
            SMS
          </Link>
        </div>
      )}
    </div>
  );
};


export default Menu;