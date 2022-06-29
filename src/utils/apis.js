/**
 * Application Api calls
 */

// Dependencies
import axios from "./axios";

/**
 * @description Fetches all subjects
 * @returns {object} Contains all subjects
 */
export const fetchAllSubjects = async () => {
    try {
        const response = await axios({ url: '/api/subject/all', method: 'get' });
        if (response.status === 200) {
            return response.data.data.subjects;
        } else throw new Error();
    } catch (error) {
        return Promise.reject(error);
    }
};

/**
 * @description Fetches all experiments belonging to a subject
 * @param {string} subjectId 
 * @returns {object} Contains all experiments belonging to subject
 */
export const fetchAllExperiments = async (subjectId) => {
    try {
        const response = await axios({ url: `/api/experiment/all/${subjectId}`, method: 'get' });
        if (response.status === 200) {
            return response.data.data.experiments;
        } else throw new Error();
    } catch (error) {
        return Promise.reject(error);
    }
};

/**
 * @description Fetches the specific experiment requested
 * @param {string} experimentId 
 * @returns {object} Contains experiment details  
 */
export const fetchSingleExperiment = async (experimentId) => {
    try {
        const response = await axios({ url: `/api/experiment/${experimentId}`, method: 'get' });
        if (response.status === 200) {
            return response.data.data.experiment;
        } else throw new Error();
    } catch (error) {
        return Promise.reject(error);
    }
};
