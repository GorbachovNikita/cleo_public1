import React, {useState} from 'react';
import './Authorization.page.css'
import Label from "../../components/Label/Label"
import SiteInput from "../../components/UI/inputs/SiteInput"
import SiteLinkButton from "../../components/UI/inputs/SiteLinkButton"
import SiteButton from "../../components/UI/inputs/SiteButton"
import CleopatraImage from "../../components/cleopatraImage"
import qr_code from '../../assets/img/authorization/qr-code.svg'

const Authorization = () => {

    const [signupBlockDisplay, setSignupBlockDisplay] = useState('block')
    const [loginBlockByUsername, setLoginBlockByUsername] = useState('none')

    const [loginFormOneDisplay, setLoginFormOneDisplay] = useState('block')
    const [loginFormTwoDisplay, setLoginFormTwoDisplay] = useState('none')

    const [loginByUserNameClass, setLoginByUserNameClass] = useState('')
    const [loginByHashPharseClass, setLoginByHashPharseClass] = useState('selectButton')

    const [loginSecretWordDisplay, setLoginSecretWordDisplay] = useState('none')

    const [signupCompletedDisplay, setSignupCompletedDisplay] = useState('none')

    const signupCompleted = async () => {

        setSignupBlockDisplay('none')
        setSignupCompletedDisplay('block')
    }

    const openLoginForm = async () => {

        setSignupBlockDisplay('none')
        setLoginBlockByUsername('block')
    }

    const openLoginByUsername = async () => {

        setLoginFormOneDisplay('block')
        setLoginFormTwoDisplay('none')

        setLoginByUserNameClass('')
        setLoginByHashPharseClass('selectButton')
    }

    const openLoginByHashPharse = async () => {

        setLoginFormOneDisplay('none')
        setLoginFormTwoDisplay('block')

        setLoginByUserNameClass('selectButton')
        setLoginByHashPharseClass('')
    }

    const continueLogin = async () => {

        setLoginSecretWordDisplay('block')
        setLoginBlockByUsername('none')
    }

    const click = async () => {

        console.log('click')
    }

    return (
        <div>
            <div className='label-form'>
            <Label/>
            </div>

            <div className="authorization_form">
                <div className="authorization_title">
                    <p>Authorization</p>
                </div>

                <div className="signup_block" style={{display: signupBlockDisplay}}>
                    <div className="signup_block_leftContent">

                        <SiteInput placeholder="Enter Username"/>
                        <SiteInput placeholder="E-mail"/>
                        <SiteInput placeholder="Password"/>
                        <SiteInput placeholder="Repeat password"/>
                        <SiteInput placeholder="Secret word"/>

                        <div className="signup_block_buttons">
                            <SiteLinkButton function={openLoginForm} text="I already have an account"/>
                            <SiteButton function={signupCompleted} value="Register"/>
                        </div>
                    </div>
                    <div className="signup_block_rightContent">

                    </div>
                </div>

                <div className="login_block_by_username" style={{display: loginBlockByUsername}}>

                    <div className="signup_block_leftContent">

                        <div className="login_block_top_buttons">
                            <SiteButton function={openLoginByUsername} value="By Username"
                                        classes={loginByUserNameClass}/>
                            <SiteButton function={openLoginByHashPharse} value="By Hash Phrase"
                                        classes={loginByHashPharseClass}/>
                        </div>

                        <div className="login_form_one" style={{display: loginFormOneDisplay}}>
                            <SiteInput placeholder="Username"/>
                            <SiteInput placeholder="Password"/>
                            <SiteInput placeholder="Google Authenticator"/>

                            <div className="login_block_bottom_button">
                                <SiteButton function={continueLogin} value="Continue" classes="siteButtonWidth100"/>
                            </div>
                        </div>

                        <div className="login_form_two" style={{display: loginFormTwoDisplay}}>
                            <SiteInput placeholder="Hash Phrase"/>
                            <SiteInput placeholder="Password"/>
                            <SiteInput placeholder="Google Authenticator"/>

                            <div className="login_block_bottom_button">
                                <SiteButton function={continueLogin} value="Continue" classes="siteButtonWidth100"/>
                            </div>
                        </div>

                    </div>

                    <div className="signup_block_rightContent">

                    </div>

                </div>

                <div className="login_secretWord" style={{display: loginSecretWordDisplay}}>

                    <div className="signup_block_leftContent">

                        <p className="inputsTitle">Enter your secret word to Login:</p>

                        <SiteInput placeholder="Secret word"/>

                        <div className="login_block_bottom_button">
                            <SiteButton function={click} value="Login" classes="siteButtonWidth100"/>
                        </div>

                    </div>

                    <div className="signup_block_rightContent"></div>

                </div>

                <div className="signup_completed" style={{display: signupCompletedDisplay}}>

                    <div className="signup_block_leftContent">

                        <p className="inputsTitle">This is your quick login hash phrase:</p>

                        <SiteButton function={click} value="Hash Phrase"
                                    classes="selectButton siteButtonWidth100 siteButtonMarginBottom40"/>

                        <p className="inputsTitle">And this is the QR-code for Google Authenticator:</p>

                        <img src={qr_code} alt="QR-code"/>

                    </div>

                    <div className="signup_block_rightContent"></div>

                </div>

            </div>

            <CleopatraImage/>
        </div>
    );
};

export default Authorization;