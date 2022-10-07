import React from 'react';
import Menu from './Menu';
import Footer from './Footer';
import pastor from './pastor.jpeg';

const PastorsDesk = () => {
    const depts = [
        "Youth department",
        "Missionary Ministry",
        "Music Ministry",
        "Dreamkeepers",
        "Dance Ministry",
        "Sunday school",
        "Bible Study"
    ]
    return (
        <div className="container">
            <Menu />
            <p className="pageTitle">Pastor's Desk</p>
            <div className='pastorDeskContainer'>
                <img src={pastor} alt="pastor dwayne" />
                <div className="pastorDeskContent">
                    <h3>Opportunities for Spiritual Growth and Maturity</h3>
                    <ul>
                        {
                            depts.map((dept, index) => {
                                return (
                                    <li key={index}>{dept}</li>
                                )
                            })
                        }
                    </ul>
                    <a href="http://nebula.wsimg.com/1b1d8c8715aa03bc9a5d142afbf871f0?AccessKeyId=0A0BA22D95F665126E59&disposition=0&alloworigin=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                        Learn about our rich history &#8594;
                    </a>
                </div>
              
            </div>
            <Footer />
        </div>
    )
}

export default PastorsDesk;