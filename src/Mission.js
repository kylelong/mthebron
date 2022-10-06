import React from 'react';
import mission from './mission.png';

const Mission = ({removeStyling}) => {
    return( 
        <div className='missionContainer'>
            <div className="headerContainer">
                <h3 className='sectionHeader'>Mission Statement</h3>
                <img src={mission} className="iconImage" alt="mission" />
            </div>
           
<p className='missionStatement'>
To proclaim the Gospel of Jesus Christ, through Love, Fellowship and Stewardship, to reach others, to guide them to spiritual Maturity and a Relationship with the Lord Jesus, by Witnessing, Mission, Evangelism and Discipleship.
 We resolve by the Power of the Holy Spirit, to work to advance the Kingdom of our Lord for the improvement of our communities; and to bring relief to those that are in bondage to poverty, ignorance, fear and prejudice!
</p>

        </div>
    )
}
export default Mission;