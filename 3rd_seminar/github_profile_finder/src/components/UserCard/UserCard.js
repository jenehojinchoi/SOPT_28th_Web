import React, { useEffect } from 'react';
import './UserCard.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const UserCard = ({ userData }) => {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  return (
    userData && (
      <div className='userCardWrapper'>
        <img  data-aos="flip-right" className="profileImage" src={userData.avatar_url} alt='profile'/>
        <div className='Info'>
          <div className='userName'>{userData.name}</div>
          <div className='userbio'>{userData.bio}</div>
          <div className='userfollowInfo'>
            <div className='followers'>
              <span>Followers</span><br></br>
              <span style={{fontWeight:'400'}}>{userData.followers}</span>
            </div>
            <div className='following'>
              <span>Following</span><br></br>
              <span style={{fontWeight:'400'}}>{userData.following}</span>
            </div>
          </div>
          {/* <div className='userID'>ID: {userData.login}</div> */}
        </div>
      </div>
    )
  )
};

export default UserCard;