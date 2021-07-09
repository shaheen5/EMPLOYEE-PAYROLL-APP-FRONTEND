import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import Axios from 'axios'
Axios.defaults.baseURL='http://localhost:8000'

export const Register = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '15px 0' }
    const titleStyle = { display: 'flex', alignItems: 'center', flexWrap: 'wrap', margin: 0 }
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    const onSubmit = (values, props) => {
        const userCredentials = {
            "firstName":values.firstName,
            "lastName":values.lastName,
            "emailId": values.email,
            "password": values.password
        }
        console.log(userCredentials)
        Axios.post('/registerUser',userCredentials ).then((res) => {
            console.log(res.data.message);
        }).catch(error => {
            console.log('error');
        })
        props.resetForm();
    }
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "First Name is too short")
            .matches(/^[a-zA-Z]{3,}$/, "First Name should contain characters").required("Required"),
        lastName: Yup.string().min(3, "Last Name is too short")
            .matches(/^[a-zA-Z]{3,}$/, "Last Name should contain characters").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        password: Yup.string().min(8, "Password should be atleast 8 characters long")
            .matches(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                "Password should conatin letters,numbers & special characters").required("Required")
    })
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid style={titleStyle}>
                    <Avatar style={avatarStyle} src="https://www.exactax.com/track/img/hr.png" />
                    <span><h2 style={{ padding: "5px" }}>EMPLOYEE PAYROLL</h2></span>
                </Grid>
                <h2 style={headerStyle}>Registration Form</h2>

                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        < Form >
                            <Field as={TextField}
                                fullWidth
                                name="firstName"
                                label='First Name'
                                placeholder="Enter your first name"
                                helperText={<ErrorMessage name="firstName">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>} />
                            <Field as={TextField}
                                fullWidth
                                name="lastName"
                                label='Last Name'
                                placeholder="Enter your last name"
                                helperText={<ErrorMessage name="lastName">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>} />
                            <Field as={TextField}
                                fullWidth
                                name="email"
                                label='Email'
                                placeholder="Enter your email id"
                                helperText={<ErrorMessage name="email">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>} />
                            <Field as={TextField}
                                fullWidth
                                name="password"
                                label='Password'
                                type="password"
                                placeholder="Enter your password"
                                helperText={<ErrorMessage name="password">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>} />
                            <Button type='submit' variant='contained' color='primary' style={btnstyle}>Sign up</Button>
                            <Typography > Already Registered User ?
                                <Link to='/login' >
                                    Log In
                                </Link>
                            </Typography>
                        </Form>
                    )
                    }
                </Formik>
            </Paper>
        </Grid >
    );
}