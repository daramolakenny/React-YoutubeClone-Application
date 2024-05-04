import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const API_KEY = 'c4d59dfbdbmshd9e72b39b3369afp1d8918jsn45f5174a9727'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (url) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    
    return(data);
  } catch (error) {
    console.log(error);
  }
}