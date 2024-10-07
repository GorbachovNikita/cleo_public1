import React from 'react';
import './Profile.page.css'
import default_avatar from '../../assets/img/profile/default_avatar.svg'
import plus_on_button from '../../assets/img/profile/avatar-button.svg'
import SiteButton from "../../components/UI/inputs/SiteButton";
import SiteInput from "../../components/UI/inputs/SiteInput";
import Header from "../../components/Header/Header";

const Profile = () => {

    const click = async () => {

        console.log('click')
    }

    return (
        <div>
            <Header/>

            <div className="profile_block">

                <div className="profile_title">
                    <p>Profile</p>
                </div>

                <div className="profile_block_content">

                    <div className="profile_info">
                        <div className="profile_info_leftContent">
                            <img src={default_avatar}/>
                            <SiteButton function={click} value="Choose new"
                                        classes="siteButtonWidth100 avatarButtonText"/>
                            <SiteButton function={click} value={<img src={plus_on_button} alt="Choose new avatar"/>}
                                        classes="siteButtonWidth100 avatarButtonImg"/>
                        </div>
                        <div className="profile_info_rightContent">

                            <p className="text_title">Natasha</p>

                            <div className="profile_contentBlock">
                                <div className="profile_contentBlock_title">
                                    <p>E-mail</p>
                                </div>
                                <div className="profile_contentBlock_content">
                                    <div className="profile_contentBlock_content_view">
                                        <div className="profile_contentBlock_content_text">
                                            <p>natashaseksikisa69@gmail.com</p>
                                            <span className="editButton" onClick={click}>Edit</span>
                                        </div>
                                    </div>
                                    <div className="profile_contentBlock_content_edit" style={{display: 'none'}}>

                                    </div>
                                </div>
                            </div>

                            <div className="profile_contentBlock">
                                <div className="profile_contentBlock_title">
                                    <p>Contact</p>
                                </div>
                                <div className="profile_contentBlock_content">
                                    <div className="profile_contentBlock_content_view">
                                        <div className="profile_contentBlock_content_text">
                                            <p>жаба матрикс что</p>
                                            <span className="editButton" onClick={click}>Edit</span>
                                        </div>
                                    </div>
                                    <div className="profile_contentBlock_content_edit" style={{display: 'none'}}>

                                    </div>
                                </div>
                            </div>

                            <div className="profile_contentBlock">
                                <div className="profile_contentBlock_title">
                                    <p>Last activity</p>
                                </div>
                                <div className="profile_contentBlock_content">
                                    <div className="profile_contentBlock_content_view">
                                        <div className="profile_contentBlock_content_text">
                                            <p>27.09.2024, 16:44</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="profile_contentBlock">
                                <div className="profile_contentBlock_title">
                                    <p>Date of registration</p>
                                </div>
                                <div className="profile_contentBlock_content">
                                    <div className="profile_contentBlock_content_view">
                                        <div className="profile_contentBlock_content_text">
                                            <p>19.08.2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="profile_changePassword">

                        <p className="text_title">Сhange password</p>

                        <SiteInput placeholder="Enter old password"/>
                        <SiteInput placeholder="Enter new password"/>
                        <SiteInput placeholder="Repeat new password"/>

                        <SiteButton function={click} value="Change Password" classes="siteButtonWidth100"/>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;