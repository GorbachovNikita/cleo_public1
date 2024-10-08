import React from 'react';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import './SellerPanel.page.css'
import Header from "../../components/Header/Header";
import SiteButton from "../../components/UI/inputs/SiteButton";

const SellerPanel = () => {

    const data = [
        {
            name: '28.09',
            profit: 15,
        },
        {
            name: '29.09',
            profit: 45,
        },
        {
            name: '30.09',
            profit: 76,
        },
        {
            name: '01.10',
            profit: 54,
        },
        {
            name: '02.10',
            profit: 43,
        },
        {
            name: '03.10',
            profit: 86,
        },
        {
            name: '04.10',
            profit: 65,
        },
    ];

    const CustomTooltip = ({active, payload, label}) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p>{`${payload[0].value}`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <div>
            <Header/>
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
                            <SiteButton value="In a week"/>
                            <SiteButton value="Per month"/>
                            <SiteButton value="For all time"/>
                        </div>
                    </div>
                    <div className="sellerCart_content">

                        <ResponsiveContainer width="95%" height={400}>
                            <LineChart
                                width={500} height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}>
                                <CartesianGrid strokeDasharray="3 3"/>
                                <XAxis dataKey="name"/>
                                <YAxis/>
                                <Tooltip
                                    content={<CustomTooltip/>}
                                />
                                <Line type="dashed" dataKey="profit" stroke="#171826" activeDot={{r: 12}}/>
                            </LineChart>
                        </ResponsiveContainer>

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