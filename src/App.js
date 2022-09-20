import React, { useState } from 'react';
import church from './mthebron.png';
import Mission from './Mission';
import Services from './Services';
import Events from './Events';
import Scripture from './Scripture';
import { Link } from 'react-router-dom';
import menu from './menu.svg';
import './App.css'
const App = () => {

 const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const clickedMenu = () => {
    setShowDropdownMenu(showDropdownMenu => !showDropdownMenu);
  }

  return (
    <div className="container">
      <div className='header'>
        <div className="churchInfo">
          <h3 id="churchName">Mt. Hebron Baptist Church</h3>
          <p id="pastor">Pastor Dwayne Brown</p>
          <p id="address">262 Neely Store Road Leslie, SC 29730 | info@mthebronbc.org | (803) 324-3820</p>
          {showDropdownMenu &&
               <div className="dropDownMenu">
               <Link to=""  className="dropDownMenuLink">Home</Link>
               <Link to=""  className="dropDownMenuLink">The Pastor's Desk</Link>
               <Link to=""  className="dropDownMenuLink">Ministries</Link>
               <Link to=""  className="dropDownMenuLink">Visitors</Link>
               <Link to=""  className="dropDownMenuLink">Photos</Link>
               <Link to=""  className="dropDownMenuLink">Contact Us</Link>
             </div>

          }
        </div>
        <div id="mobileMenu">
          <img src={menu} className="menuBtn" onClick={clickedMenu} />
        </div>
      </div>

      <div className="menu">
        <Link to=""  className="menuLink">Home</Link>
        <Link to=""  className="menuLink">The Pastor's Desk</Link>
        <Link to=""  className="menuLink">Ministries</Link>
        <Link to=""  className="menuLink">Visitors</Link>
        <Link to=""  className="menuLink">Photos</Link>
        <Link to=""  className="menuLink">Contact Us</Link>
      </div>

      <div>
        <img src={church} className="churchImg" />
      </div>
      <Scripture />
      <Mission />
      <Services />
      <Events />
    </div>
  )
}

export default App;