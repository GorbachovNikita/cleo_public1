import React from 'react';
import './BecomeASeller.page.css'
import Header from "../../components/Header/Header";
import SiteInput from "../../components/UI/inputs/SiteInput";
import SiteButton from "../../components/UI/inputs/SiteButton";

const BecomeASeller = () => {
    return (
        <div>
            <Header/>
            <div className="becomeaseller-form">
                <div className="becomeaseller-form-title">
                    <p>Become a Seller</p>
                </div>
                <div className="becomeaseller-form-content">
                    <div className="seller-rules-block">
                        <div className="seller-rules-title">
                            <p>Seller rules:</p>
                        </div>
                        <div className="seller-rules-contentBlock">
                            <ul>
                                <li>jvdnjvgsnksf</li>
                                <li>jsgdhlifdnlkhidv</li>
                                <li>jisgdjoisdjipad</li>
                                <li>jo;afdkp[aeflk;sgr</li>
                            </ul>
                        </div>
                        <div className="seller-rules-title">
                            <p>By confirming the application you accept all the seller rules above.</p>
                        </div>
                    </div>
                    <div className="seller-rules-form">
                        <div className="seller-rules-titleBlock">
                            <p>Fill out the form:</p>
                        </div>
                        <div className="seller-rules-formBlock">
                            <SiteInput placeholder="Forum links/vouches"/>
                            <SiteInput placeholder="Source of material"/>
                            <SiteInput placeholder="Cards you are willing to upload per week"/>
                            <SiteInput placeholder="Estimated valid rate"/>
                            <SiteButton value="Confirm"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeASeller;