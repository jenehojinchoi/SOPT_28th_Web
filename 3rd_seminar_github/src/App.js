import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserCard from './components/UserCard';
import getUserData from './lib/api';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [userState, setUserState] = useState({
    status: 'idle',
    data: null
  })

  const getUser = async (name) => {
    setUserState({...userState, status: 'pending'})
    try {
      const data = await getUserData(name);
      setUserData(data);

      setUserState({status: 'resolved', data: data});
    } catch (err) {
      console.log(err);
      setUserState({status: 'rejected', data: null});
    }
  }

  return (
    <>
      <SearchBar getUser={getUser}/>
      <UserCard userData={userData}/>
    </>
  );
}

export default App;