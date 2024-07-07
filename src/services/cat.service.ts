import axios from 'axios';

const CAT_API_URL = 'https://api.thecatapi.com/v1';
const API_KEY = process.env.CAT_API_KEY || 'live_JBT0Ah0Nt12iyl2IpjQVLDWjcLk0GQwf4zI9wBMfmfejKmcC31mOJp4yJz5TsOUP';

export const getBreeds = async () => {
    const response = await axios.get(`${CAT_API_URL}/breeds`, {
      headers: { 'x-api-key': API_KEY }
    });
    return response.data;
  };


  export const getBreedById = async (breed_id: string) => {
    const response = await axios.get(`${CAT_API_URL}/breeds/${breed_id}`, {
      headers: { 'x-api-key': API_KEY }
    });
    return response.data;
  };
  
  export const searchBreeds = async (query: string) => {
    const response = await axios.get(`${CAT_API_URL}/breeds/search?q=${query}`, {
      headers: { 'x-api-key': API_KEY }
    });
    return response.data;
  };
  
  export const getImagesByBreedId = async (breed_id: string) => {
    const response = await axios.get(`${CAT_API_URL}/images/search?breed_id=${breed_id}`, {
      headers: { 'x-api-key': API_KEY }
    });
    return response.data;
  };