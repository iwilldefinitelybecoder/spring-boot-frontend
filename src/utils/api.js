import axios from 'axios';

export const getQuestions = async () => {
    const response = await axios.get('http://localhost:8080/cars/allcars');
    return response.data;
}

export const getBrands = async (model) => {  
    const response = await axios.get(`http://localhost:8080/cars/brands/${model}`);
    return response.data;
}