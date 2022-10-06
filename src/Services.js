import React from 'react';
import community from './community.png';
const Services = ({removeStyling}) => {
    return (
        <div className='servicesContainer'>
            <div className="headerContainer">
                <h3 className="sectionHeader">Services</h3>
                <img src={community} className="iconImage" alt="community" />
            </div>

            <ul className="sectionList">
                <li>Sunday School - 9:00 - 9:45am</li>
                <li>Sunday Worship  - 10:00am</li>
                <li>Bible Study - 12:00pm Wed & 6:30pm Thu</li>
                <li>Prayer - 6:30pm Wed</li>

            </ul>
        
        </div>
    )
}
export default Services;