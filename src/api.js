import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async() => {
    try {
        // Change this to a valid endpoint if needed
        const movie = await axios.get(`${baseUrl}/movie/popular?page=1&api_key=${apiKey}`);
        return movie.data.results;
    } catch (error) {
        console.error("Error fetching movie list:", error.response?.data || error.message);
        throw error;
    }
};

export const searchMovie = async(q) => {
    try {
        const search = await axios.get(`${baseUrl}/search/movie?page=1&query=${q}&api_key=${apiKey}`);
        return search.data;
    } catch (error) {
        console.error("Error searching movie:", error.response?.data || error.message);
        throw error;
    }
};
