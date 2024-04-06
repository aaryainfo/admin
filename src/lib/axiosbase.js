// Axios
import axios from "axios";
// Redux
// import { dispatch } from "store";

// import { openSnackbar } from 'store/reducers/snackbar';
// import { FormattedMessage } from 'react-intl';

// Create axios instance
const instance = axios.create({
    // baseURL: process.env.REACT_APP_API_URL,
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
});

// Add a request interceptor
instance.interceptors.request.use(
    (config) => {
        
            // Reset authorization 
            config.headers.Authorization = `${localStorage.getItem('token')}`;

            const fixedUrlPart = 'http://localhost:8080'; // process.env.REACT_APP_FIXED_URL; // Replace with your fixed URL part
            config.url = `${fixedUrlPart}${config.url}`;

            return config;
        
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(response => {
    // if (response.data.errorCode === 'E_TENANT_ACCESS') {
    //     dispatch(openDialog('E_TENANT_ACCESS'));
    // }
    // else {
        return response;
    // }
}, error => {
    if ((error && error.response && error.response.status && error.response.status === 401) || (error && error.code === 'ERR_NETWORK')) { // error.code === 'ERR_NETWORK'
console.log("error: ",error)
        // // Show toaster for session timeout
        // dispatch(
        //     openSnackbar({
        //         open: true,
        //         message: <FormattedMessage id="sessionTimeOutError" />,
        //         variant: 'alert',
        //         alert: {
        //             color: 'error'
        //         },
        //         close: true
        //     })
        // )

        // Navigate to login page
        // setTimeout(() => {
        //     localStorage.clear();
        //     window.location.href = '/';
        // }, 1000)

        // dispatch(openDialog());

    }
    else {
        return Promise.reject(error);
    }
});

export default instance;
