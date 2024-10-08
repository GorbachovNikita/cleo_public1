import './SupportBlock.css';
import TgIcon from '../../../assets/icons/Telegramm.svg';
import JabberIcon from '../../../assets/icons/Jabber.svg';
import UtoxIcon from '../../../assets/icons/Utox.svg';

const SupportBlock = () => {

    return (
        <div className='support-container'>
            <div className='support-header'>
               <h1 className='support-block_title'>Support</h1>
            </div>

            <p className='support-text'>If you have any questions, you can contact us here:</p>

            <div className='social-network'>
              <button className='social-btn'>
                <img src={TgIcon} alt='Telegramm' className='support-icon'/>
                Telegram
              </button>
              <button className='social-btn'>
                <img src={JabberIcon} alt='Jabber' className='support-icon'/>
                Jabber
              </button>
              <button className='social-btn'>
                <img src={UtoxIcon} alt='Utox' className='support-icon'/>
                Utox
              </button>
            </div>

        </div>
    )
}

export default SupportBlock;