import axiosInstance from '../lib/axiosbase';

export const getWebuserList1 = () => {
    return axiosInstance.get('/api/admin/webuser/get')
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

export const createWebuserList = (payload) => {
    return axiosInstance.post('/api/admin/webuser/create', payload)
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

export const updateWebuserList = (payload) => {
    return axiosInstance.post('/api/admin/webuser/update', payload)
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

export const deleteWebuserApi = (payload) => {
    return axiosInstance.post('/api/admin/webuser/delete', payload)
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

export const getWebuserWithId = (payLoad) => {
    return axiosInstance.post('/api/admin/webuser/getWebuserWithId', payLoad)
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
