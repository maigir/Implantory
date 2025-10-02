import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
  headers: {
    "Content-Type": "application/json"
  }
});

export const getAllImplants = async () => {
  try {
    const response = await api.get('/implants');
    return response.data.data;
  } catch(err) {
    console.error('Error fetching implants:', err)
    return []; // for not breaking the app
  }
};

export const postNewImplant = async (implantData) => {
  try {
    const response = await api.post('/implants', implantData);
    return response.data.data; // the saved implant from backend
  } catch(err) {
    console.error('Error creating new implant:', err);
    throw err; //important!! for frontend
}
}
