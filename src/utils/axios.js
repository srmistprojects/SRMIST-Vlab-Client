/**
 * Axios Setup
 */

// Dependencies
import axios from 'axios';

const serverUrl = process.env.NODE_ENV === 'production' ?
    'https://srmist-vlab.herokuapp.com' :
    'http://localhost:5000';

const axiosInstance = axios.create({
    baseURL: serverUrl,
});

const server = async (options) => {
    const onSuccess = (response) => response;
    const onError = (error) => {
        if (error.isAxiosError && !error.response) {
            return error.toJSON();
        } else if (error.response) {
            return error.response;
        } else return error;
    };
    try {
        const response = await axiosInstance(options);
        return onSuccess(response);
    } catch (error) {
        return Promise.reject(onError(error));
    }
};

export default server;