import React from 'react';
import './Scripture.css';
import scripture from './scripture.png';

const Scripture = () => {
    return( 
        <div className='scriptureContainer'>
            <div className="headerContainer">
                <h3 className='sectionHeader'>Micah 6:8 (HCSB)</h3>
                <img src={scripture} className="iconImage" alt="scripture" />
            </div>
            <p className='missionStatement'>
            8 He has told you men what is good and what it is the Lord requires of you: Only to act justly, to love faithfulness, and to walk humbly with your God.
            </p>

        </div>
    )
}
export default Scripture;