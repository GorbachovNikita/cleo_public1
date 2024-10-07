import React from 'react';
import './Checker.page.css'
import Header from "../../components/Header/Header";
import SiteButton from "../../components/UI/inputs/SiteButton";
import default_img from '../../assets/img/checker/checker_default_img.svg'

const Checker = () => {
    return (
        <div>
            <Header/>

            <div className="checker_form">
                <div className="checker_title">
                    <div className="checker_title_leftContent">

                    </div>
                    <div className="checker_title_middleContent">
                        <p>Checker</p>
                    </div>
                    <div className="checker_title_rightContent">
                        <SiteButton value="Choose Checker"/>
                    </div>
                </div>

                <div className="chekcer_content">

                    <div className="checker_inputs">

                        <div className="checker_contentBlock">
                            <div className="checker_contentTitle">
                                <p>Input</p>
                            </div>
                            <div className="checker_block_content">

                            </div>
                        </div>

                    </div>

                    <div className="checker_alive">

                        <div className="checker_contentBlock">
                            <div className="checker_contentTitle">
                                <p>Alive</p>
                            </div>
                            <div className="checker_block_content">

                                <div className="checkerContent_block">
                                    <img src={default_img}/>
                                    <p>Log 315684</p>
                                </div>

                                <div className="checkerContent_block">
                                    <img src={default_img}/>
                                    <p>Log 315684</p>
                                </div>

                                <div className="checkerContent_block">
                                    <img src={default_img}/>
                                    <p>Log 315684</p>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div className="checker_cards">

                        <div className="checker_contentBlock">
                            <div className="checker_contentTitle">
                                <p>Dead</p>
                            </div>
                            <div className="checker_block_content">

                                <div className="checkerContent_block">
                                    <img src={default_img}/>
                                    <p>Log 315684</p>
                                </div>

                                <div className="checkerContent_block">
                                    <img src={default_img}/>
                                    <p>Log 315684</p>
                                </div>

                            </div>
                        </div>

                        <div className="checker_contentBlock">
                            <div className="checker_contentTitle">
                                <p>All Cards</p>
                            </div>
                            <div className="checker_block_content">

                                <div className="checkerContent_block">
                                    <img src={default_img}/>
                                    <p>Log 315684</p>
                                </div>

                                <div className="checkerContent_block">
                                    <img src={default_img}/>
                                    <p>Log 315684</p>
                                </div>

                                <div className="checkerContent_block">
                                    <img src={default_img}/>
                                    <p>Log 315684</p>
                                </div>

                                <div className="checkerContent_block">
                                    <img src={default_img}/>
                                    <p>Log 315684</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

            <div className="checker_bottomButtons">

                <div>

                </div>

                <div>
                    <SiteButton value="Download Alive" classes="lightButton"/>
                </div>

                <div>
                    <SiteButton value="Download all" classes="lightButton"/>
                </div>

            </div>
        </div>
    );
};

export default Checker;