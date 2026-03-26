import axios from 'axios';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const searchCharacters = async (keyword) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: { name: keyword }
        });

        return response.data.results;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            return [];
        }

        throw new Error(`Character search failed: ${error.message}`);
    }
};

export const getCharacterById = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error(`Get character by ID failed: ${error.message}`);
    }
};