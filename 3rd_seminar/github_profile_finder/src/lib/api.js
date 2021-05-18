import axios from 'axios';

const getUserData = async (name) => {
  try {
    const {data} = await axios.get('https://api.github.com/users/' + name);
    console.log('API.JS/GET USER DATA');
    console.log(data);
    return data
    
  } catch(err) {
    console.log(err);
    console.log('API.JS/GET USER DATA');
    return null;
  }
}

export default getUserData;