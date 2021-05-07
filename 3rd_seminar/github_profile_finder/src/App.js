import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import UserCard from './components/UserCard/UserCard';
import getUserData from './lib/api';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [userState, setUserState] = useState({
    status: 'idle',
    data: null
  })

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

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
    <div data-aos="zoom-in-up">
      <div className='wrap'>
        {(userData===null) && <div>Search Github User</div>}
        <SearchBar getUser={getUser}/>
        <UserCard userData={userData}/>
      </div>
    </div>
  );
}

export default App;