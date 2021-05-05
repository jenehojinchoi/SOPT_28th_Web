import React from 'react';

const SearchBar = ({ getUser}) => {
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
    <>
      <form onSubmit={submitHandler}>
      <input type="text" value={userName} onChange={changeHandler} placeholder='Enter github ID'></input>
      </form>
    </>
      
  );
};

export default SearchBar;