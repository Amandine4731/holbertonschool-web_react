import React from 'react';
import './Notifications.css'
import {getLatestNotification} from './utils.js';


function Notifications() {
    function buttonTextLog() {
        console.log('Close button has been clicked');
      };
    return(
        <div className='Notifications'>
            <button onClick={buttonTextLog} aria-label='Close'style={{
                float: 'right',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: 'none',
            }}>x</button>
            <p>Here is the list of notifications</p>
            <ul className='List'>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent" dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
}

export default Notifications;