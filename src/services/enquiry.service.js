import axiosInstance from '../lib/axiosbase';

export const getEnquiryList1 = () => {
    return axiosInstance.get('/api/admin/enquiry/get')
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

export const createEnquiryList = (payload) => {
    return axiosInstance.post('/api/admin/enquiry/create', payload)
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

export const updateEnquiryList = (payload) => {
    return axiosInstance.post('/api/admin/enquiry/update', payload)
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

export const deleteEnquiryApi = (payload) => {
    return axiosInstance.post('/api/admin/enquiry/delete', payload)
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

export const getEnquiryWithId = (payLoad) => {
    return axiosInstance.post('/api/admin/enquiry/getEnquiryWithId', payLoad)
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
