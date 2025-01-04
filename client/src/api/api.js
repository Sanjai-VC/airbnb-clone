import axios from 'axios';

const api = axios.create({
    baseURL: '/api', // Base URL for all API calls
});

export const loginUser = async (credentials) => {
    const response = await api.post('/auth/login', credentials);
    return response.data;
};

export const getProperties = async () => {
    const response = await api.get('/properties');
    return response.data;
};

export default api;
