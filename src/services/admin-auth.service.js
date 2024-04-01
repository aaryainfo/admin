import axios from 'axios';
import axiosInstance from '../lib/axiosbase';

export const signInAdmin = (loginData) => {
    
    return axiosInstance.post('/api/auth/signin', loginData)
        .then((response) => {
            // Handle successful response
            console.log(response.data);
            return response.data;
        })
    .catch((error) => {
        // Handle error
        console.error('Error fetching data:', error);
        return error;
    });
}

export const getBlogList1 = () => {
    return axiosInstance.get('/api/admin/blog/get')
        .then((response) => {
            // Handle successful response
            console.log(response.data);
            return response.data;
        })
    .catch((error) => {
        // Handle error
        console.error('Error fetching data:', error);
        return error;
    });
}

export const createBlogList = (payload) => {
    return axiosInstance.post('/api/admin/blog/create', payload)
        .then((response) => {
            // Handle successful response
            console.log(response.data);
            return response.data;
        })
    .catch((error) => {
        // Handle error
        console.error('Error fetching data:', error);
        return error;
    });
}