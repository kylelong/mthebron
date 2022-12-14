import React from 'react';
import calendar from './calendar.png';

const Events = () => {
    return (
        <div className="eventsContainer">
            <div className="headerContainer">
                <h3 className='sectionHeader'>Events</h3>
                <img src={calendar} className="iconImage" alt="events" />
            </div>

           <ul>
               <li>February 13, 2022 - Sweet Treat Sunday Red And White Day</li>
               <li>February 20, 2022 - Apparel Day</li>
               <li>February 26, 2022 - Black History Program 3:30 - Virtual</li>
               <li>February 27, 2022 - Decade Day</li>
           </ul>
        </div>
    )
}
export default Events;