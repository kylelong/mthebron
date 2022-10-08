import React, { useState } from 'react';
import menu from './menu.svg';
import { Link } from 'react-router-dom';

const Menu = () => {

 const [showDropdownMenu, setShowDropdownMenu] = useState(false);
 const clickedMenu = () => {
   setShowDropdownMenu(showDropdownMenu => !showDropdownMenu);
 }

    return (
        <div>
            <div className='header'> 
            <div className="churchInfo">
            <h3 id="churchName">Mt. Hebron Baptist Church</h3>
            <p id="pastor">Pastor Dwayne Brown</p>
            <p id="address">262 Neely Store Road Leslie, SC 29730 | info@mthebronbc.org | (803) 324-3820</p>
            {showDropdownMenu &&
                <div className="dropDownMenu">
                <Link to="/"  className="dropDownMenuLink">Home</Link>
                <Link to="/pastorsdesk" className="dropDownMenuLink">The Pastor's Desk</Link>
                <Link to="/ministries"  className="dropDownMenuLink">Ministries</Link>
                <Link to="/visitors"  className="dropDownMenuLink">Visitors</Link>
                <Link to="/photos"  className="dropDownMenuLink">Photos</Link>
                <Link to=""  className="dropDownMenuLink">Contact Us</Link>
                </div>

            }
            </div>
            <div id="mobileMenu">
            <img src={menu} alt="menubtn" className="menuBtn" onClick={clickedMenu} />
            </div>
        </div>

        <div className="menu">
            <Link to="/"  className="menuLink">Home</Link>
            <Link to="/pastorsdesk" className="menuLink">The Pastor's Desk</Link>
            <Link to="/ministries"  className="menuLink">Ministries</Link>
            <Link to="/visitors"  className="menuLink">Visitors</Link>
            <Link to="/photos"  className="menuLink">Photos</Link>
            <Link to=""  className="menuLink">Contact Us</Link>
        </div>
      </div>
    )
}

export default Menu;