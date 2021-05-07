import axios from 'axios';

const getUserData = async (name) => {
  try {
    const {data} = await axios.get('https://api.github.com/users/' + name);
    return data;
  } catch(err) {
  console.log(err);
  return null;
  }
}

export default getUserData;