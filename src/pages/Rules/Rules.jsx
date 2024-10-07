import React from 'react';
import './Rules.page.css'
import CleopatraImage from "../../components/cleopatraImage";
import SiteCheckbox from "../../components/UI/inputs/SiteCheckbox";
import Header from "../../components/Header/Header";

const Rules = () => {

    const click = async () => {

        console.log('click')
    }

    return (
        <div>
            <Header/>

            <div className="rules_form">
                <div className="rules_title">
                    <p>Rules</p>
                </div>

                <div className="rules_content">

                    <div className="rules_topContent">
                        <ol>
                            <li>Ne materit`sya!</li>
                            <li>Ne vorovat` y mi nichego!!!</li>
                            <li>Nikakih pisem schastya!</li>
                            <li>Ya vsegda prava!</li>
                            <li>Ya tut samaya glavnaya Blum!!!</li>
                            <li>Ne obizhat` moih druzei!</li>
                            <li>Ne oskorblyat` vinks klub!!</li>
                            <li>Gosti bez profilya - provalivayte!</li>
                        </ol>
                    </div>
                    <div className="rules_bottomContent">
                        <SiteCheckbox function={click}/>
                        <p>I have read the rules of the site and accept them</p>
                    </div>

                </div>

            </div>

            <CleopatraImage/>
        </div>
    );
};

export default Rules;