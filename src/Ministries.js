import React from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Ministires = () => {
    // 2 X 7 grids
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
            <ul>
                    {
                        depts.map((dept, index) => {
                            return (
                                <li key={index}>{dept}</li>
                            )
                        })
                    }
                </ul>
                <Footer />
        </div>
    )
}

export default Ministires;