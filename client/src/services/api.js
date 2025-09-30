import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
});

export const getAllImplants = async () => {
  try {
    const response = await api.get('/implants');
    return response.data.data;
  } catch(err) {
    console.error('Error fetching implants:', err)
    return []; //for not breaking the app
  }
};
