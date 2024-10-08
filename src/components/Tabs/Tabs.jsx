import React, {useState} from 'react';
import './Tabs.css';
import TopUpIcon from '../../assets/icons/top-up.svg';
import CartIcon from '../../assets/icons/cart.svg';
import PersonIcon from '../../assets/icons/person.svg';
import {Link} from 'react-router-dom';

import profile_icon from '../../assets/img/tabs/profile_icon.svg'
import my_purchases_icon from '../../assets/img/tabs/my_purchases_icon.svg'
import rules_icon from '../../assets/img/tabs/rules_icon.svg'
import faq_icon from '../../assets/img/tabs/faq_icon.svg'
import support_icon from '../../assets/img/tabs/support_icon.svg'
import become_a_seller_icon from '../../assets/img/tabs/become_a_seller_icon.svg'
import logout_icon from '../../assets/img/tabs/logout_icon.svg'

const Tabs = () => {

    const [profileMenuDisplay, setProfileMenuDisplay] = useState('none')

    return (
        <div>
            <div className='content-tabs'>
                <h3 className='titleHeader'>
                    Balance: <span className='spanTitle'>$300</span>
                </h3>
                <div className='tab-buttons'>

                    <Link to="/payment" className='btnHeader' aria-label="Top up balance">
                        Top up
                        <img src={TopUpIcon} alt="Payment" className='icon'/>
                    </Link>

                    <Link to="/cart" className='btnHeader' aria-label="View cart">
                        Cart
                        <img src={CartIcon} alt="Cart" className='icon'/>
                    </Link>

                    <p className='btnHeader' aria-label="View profile" onClick={() => setProfileMenuDisplay('flex')}>
                        Profile
                        <img src={PersonIcon} alt="Profile" className='icon'/>
                    </p>

                </div>

                <div className='btnHeader-mobile'>
                    <button className='btnHeader' aria-label="View profile"
                            onClick={() => setProfileMenuDisplay('flex')}>
                        <img src={PersonIcon} alt="Profile" className='icon'/>
                    </button>
                </div>
            </div>

            <div className="profile-menu" style={{display: profileMenuDisplay}}>
                <div className="profile-menu-background" onClick={() => setProfileMenuDisplay('none')}></div>
                <div className="profile-menu-content">
                    <Link to="/profile">
                        <p>Profile</p>
                        <img src={profile_icon}/>
                    </Link>
                    <Link to="/purchase">
                        <p>My Purchases</p>
                        <img src={my_purchases_icon}/>
                    </Link>
                    <Link to="/rules">
                        <p>Rules</p>
                        <img src={rules_icon}/>
                    </Link>
                    <Link to="/faq">
                        <p>FAQ</p>
                        <img src={faq_icon}/>
                    </Link>
                    <Link to="/support">
                        <p>Support</p>
                        <img src={support_icon}/>
                    </Link>
                    <Link to="/becomeaseller">
                        <p>Become a Seller</p>
                        <img src={become_a_seller_icon}/>
                    </Link>
                    <Link to="/logout">
                        <p>Logout</p>
                        <img src={logout_icon}/>
                    </Link>
                </div>
            </div>
        </div>
  );
};

export default Tabs;