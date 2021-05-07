import React from 'react';
import './SearchBar.css';

const SearchBar = ({ getUser }) => {
  const [userName, setUserName] = React.useState("");
  
  const changeHandler = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    getUser(userName);
  }

  return (
    <div className='searchBarWrapper'>
      <form onSubmit={submitHandler}>
      <input 
        type="text" 
        value={userName} 
        onChange={changeHandler} 
        placeholder='Enter Github ID'
        className='inputBox'
      ></input>
      </form>
    </div>   
  );
};

export default SearchBar;