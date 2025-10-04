import axios from 'axios';

const api = axios.create({
  baseURL: 'https://implantory.onrender.com/api',
});

export const getAllImplants = async () => {
  try {
    const response = await api.get('/implants');
    return response.data.data;
  } catch(err) {
    console.error('Error fetching implants:', err)
    return []; //fallback
  }
};

export const postNewImplant = async (implantData) => {
  try {
    const response = await api.post('/implants', implantData);
    return response.data.data;
  } catch(err) {
    console.error('Error creating new implant:', err);
    throw err;
  }
}

export const deleteImplant = async (id) => {
  try {
    const response = await api.delete(`/implants/${id}`);
    console.log(response);
    return response.data.message;
  } catch(err) {
    console.error('Error deleting implant:', err);
    throw err;
  }
}