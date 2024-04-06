import axiosInstance from '../lib/axiosbase';

export const getCustomerList1 = () => {
    return axiosInstance.get('/api/admin/customer/get')
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

export const createCustomerList = (payload) => {
    return axiosInstance.post('/api/admin/customer/create', payload)
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

export const updateCustomerList = (payload) => {
    return axiosInstance.post('/api/admin/customer/update', payload)
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

export const deleteCustomerApi = (payload) => {
    return axiosInstance.post('/api/admin/customer/delete', payload)
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

export const getCustomerWithId = (payLoad) => {
    return axiosInstance.post('/api/admin/customer/getCustomerWithId', payLoad)
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
