import axios from 'axios';

export const getUserData = async () => {
  try {
    const data = axios.get(`http://localhost:3001/posts`);
    console.log('SUCCESS GET USER DATA');
    return data.data.data;
  } catch (e) {
    console.log(e);
  }
};