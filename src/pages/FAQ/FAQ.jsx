import React from 'react';
import './FAQ.page.css'
import Header from "../../components/Header/Header";
import {faq} from '../../helpers/FAQData'
import FAQBlock from "./FAQBlock/FAQBlock";

const Faq = () => {
    return (
        <div>
            <Header/>

            <div className="faq_form">

                <div className="faq_title">
                    <p>FAQ</p>
                </div>

                <div className="faq_content">

                    {faq.map((faq) =>
                        <FAQBlock
                            id={faq.id}
                            title={faq.title}
                            description={faq.description}
                            img={faq.img}
                        />
                    )}

                </div>

            </div>
        </div>
    );
};

export default Faq;