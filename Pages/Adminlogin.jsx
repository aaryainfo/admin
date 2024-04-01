import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { signInAdmin } from '../src/services/admin-auth.service';

export default function Adminlogin() {
    const navigate = useNavigate();

    // Define validation schema using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is required')
    });

    // Handle form submission
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            // Perform login operation
            const signInResult = await signInAdmin(values);
            // If login is successful, navigate to dashboard
            localStorage.setItem('token', signInResult.token); // Dummy token for demonstration
            navigate('/dashboard');
        } catch (error) {
            console.error(error);
            // Handle error (e.g., display error message)
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className='adminLoginPage'>
            <div className="adminLoginDiv">
                <div className="heading">Admin Login</div>
                {/* Formik handles form state and validation */}
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="inBox">
                                <div className="tit">Email ID</div>
                                <Field type="email" name="email" placeholder="Enter Email" className="inText" />
                                <ErrorMessage name="email" component="div" className="error error-message" />
                            </div>
                            <div className="inBox">
                                <div className="tit">Password</div>
                                <Field type="password" name="password" placeholder="Enter Password" className="inText" />
                                <ErrorMessage name="password" component="div" className="error error-message" />
                            </div>
                            <button type="submit" className="loginbtn" disabled={isSubmitting}>
                                {isSubmitting ? 'Logging in...' : 'Login'}
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
