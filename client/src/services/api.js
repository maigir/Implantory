import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000'
});

const handleError = (err) => {
  console.error('API error:', err.response.data || err.message);
  throw err;
}

export const fetchAllNewImplants = async () => {
  try {
    const { data } = await api.get('/new');
    return data;
  } catch(err) {
    handleError(err);
  }
};

export const fetchAllUsedImplants = async () => {
  try {
    const { data }= await api.get('/used');
    return data;
  } catch(err) {
    handleError(err);
  }
};
