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

export const updateBlogList = (payload) => {
    return axiosInstance.post('/api/admin/blog/update', payload)
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

export const deleteBlogApi = (payload) => {
    return axiosInstance.post('/api/admin/blog/delete', payload)
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

export const getBlogWithId = (payLoad) => {
    return axiosInstance.post('/api/admin/blog/getBlogWithId', payLoad)
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
