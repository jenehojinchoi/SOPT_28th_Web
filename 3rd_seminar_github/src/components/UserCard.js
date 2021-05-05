import React from 'react';
import '../index.css';

const UserCard = ({ userData }) => {
  return (
    userData && (
      <>
        <img className="profileImage" src={userData.avatar_url} alt='profile'/>
        <p>{userData.name}</p>
        <p>{userData.bio}</p>
        <p>Followers: {userData.followers}</p>
        <p>Following: {userData.following}</p>
        <p>ID: {userData.login}</p>
      </>
    )
  )
};

export default UserCard;