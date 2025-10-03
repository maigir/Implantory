import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
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
    return response.data.data; // saved implant from backend
  } catch(err) {
    console.error('Error creating new implant:', err);
    throw err; //important!! for frontend
}
}

export const deleteImplant = async (id) => {
  try {
    const response = await api.delete(`/implants/${id}`);
    console.log(response);
    return response.data.message;
  } catch(err) {
    console.error('Error deleting implant:', err);
    throw err; //important!! for frontend
}
}