import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import messagingApps from '../../icons/messaging_apps.jpg';
import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <div style={{display: 'flex',  justifyContent:'center'}}>
      <h1>Welcome!</h1>
      </div>
      <h2>It's a Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h2>
      <h3>Created with React, Express, Node and Socket.IO </h3>
      <p className="imageContainer">
      <img alt="Messaging Apps" src={messagingApps} height="130px" width="230px"/>
      </p>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
    
  </div>


);

export default TextContainer;