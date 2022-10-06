import React from 'react';
import Menu from './Menu';
import Footer from './Footer';

const Ministires = () => {

    return (
        <div className="container">
             <Menu />
             <p className="pageTitle">Ministries</p>
            <div className="ministriesContainer">
              <div className='ministriesRow'>
                <p>Bible Study <span className="minsitryLine"> | </span></p>
                <p>Dance Ministry <span className="minsitryLine"> | </span></p>
                <p>Dreamkeepers <span className="minsitryLine"> | </span></p>
                <p>Missionary Ministry</p>
              </div>

               <div className='ministriesRow'>
                <p>Music Ministry <span className="minsitryLine"> | </span></p>
                <p>Youth Department <span className="minsitryLine"> | </span></p>
                <p>Sunday School</p>
               </div>
  
            </div>
                <Footer />
        </div>
    )
}

export default Ministires;