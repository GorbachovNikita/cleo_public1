import React from 'react';
import './SellerPanel.page.css'
import Header from "../../components/Header/Header";
import SiteButton from "../../components/UI/inputs/SiteButton";

const SellerPanel = () => {
    return (
        <div>
            <Header />
            <div className="sellerPanel_form">

                <div className="sellerPanel_title">
                    <div className="sellerPanel_title_text">
                        <p>Seller Panel</p>
                    </div>
                    <div className="sellerPanel_title_buttons">
                        <SiteButton value="Upload CC" />
                        <SiteButton value="Cash Out" />
                        <p>Balance: <span>300$</span></p>
                    </div>
                </div>

                <div className="sellerPanel_chart">
                    <div className="sellerCart_title">
                        <div className="sellerCart_text">
                            <p>Sales chart</p>
                        </div>
                        <div className="sellerCart_buttons">
                            <SiteButton value="In a week" />
                            <SiteButton value="Per month" />
                            <SiteButton value="For all time" />
                        </div>
                    </div>
                    <div className="sellerCart_content">
                        <p>Graphs are usually output using plugins</p>
                    </div>
                </div>

                <div className="sellerCart_tables">

                    <div className="sellerCart_tableBlock">

                        <table>
                            <caption>
                                Latest uploads
                            </caption>
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Object</th>
                                <th>Base name</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>10</td>
                                <td>Upload Seller 24.09.2024</td>
                                <td>Base name</td>
                                <td>Purchased</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Upload Seller 24.09.2024</td>
                                <td>Base name</td>
                                <td>Purchased</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Upload Seller 24.09.2024</td>
                                <td>Base name</td>
                                <td>Purchased</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Upload Seller 24.09.2024</td>
                                <td>Base name</td>
                                <td>Purchased</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Upload Seller 24.09.2024</td>
                                <td>Base name</td>
                                <td>Purchased</td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="moreInfo_table">
                            <SiteButton value="Show all" />
                        </div>

                    </div>

                    <div className="sellerCart_tableBlock">

                        <table>
                            <caption>
                                Latest uploads
                            </caption>
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Object</th>
                                <th>Base name</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>10</td>
                                <td>Upload Seller 24.09.2024</td>
                                <td>Base name</td>
                                <td>Purchased</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Upload Seller 24.09.2024</td>
                                <td>Base name</td>
                                <td>Purchased</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Upload Seller 24.09.2024</td>
                                <td>Base name</td>
                                <td>Purchased</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Upload Seller 24.09.2024</td>
                                <td>Base name</td>
                                <td>Purchased</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Upload Seller 24.09.2024</td>
                                <td>Base name</td>
                                <td>Purchased</td>
                            </tr>
                            </tbody>
                        </table>

                        <div className="moreInfo_table">
                            <SiteButton value="Show all" />
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default SellerPanel;