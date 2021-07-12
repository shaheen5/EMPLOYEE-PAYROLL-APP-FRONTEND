import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { User } from '../services/user'
import { Link } from 'react-router-dom';
const user = new User();

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
            "firstName": values.firstName,
            "lastName": values.lastName,
            "emailId": values.email,
            "password": values.password
        }
        user.userRegistration(userCredentials)
            .then((response) => {
                alert(response.data.message);
            })
            .catch((error) => {
                console.log(error.message);
            });
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
                    <Avatar style={avatarStyle} src="https://www.exactax.com/track/img/hr.png" data-testid='logo' />
                    <span><h2 style={{ padding: "5px" }} data-testid='title'>EMPLOYEE PAYROLL</h2></span>
                </Grid>
                <h2 style={headerStyle} data-testid='heading'>Registration Form</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        < Form data-testid='form'>
                            <Field as={TextField}
                                fullWidth
                                name="firstName"
                                label='First Name'
                                data-testid='firstName'
                                placeholder="Enter your first name"
                                helperText={<ErrorMessage name="firstName">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>} />
                            <Field as={TextField}
                                fullWidth
                                name="lastName"
                                label='Last Name'
                                data-testid='lastName'
                                placeholder="Enter your last name"
                                helperText={<ErrorMessage name="lastName">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>} />
                            <Field as={TextField}
                                fullWidth
                                name="email"
                                label='Email'
                                data-testid='email'
                                placeholder="Enter your email id"
                                helperText={<ErrorMessage name="email">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>} />
                            <Field as={TextField}
                                fullWidth
                                name="password"
                                label='Password'
                                type="password"
                                data-testid='password'
                                placeholder="Enter your password"
                                helperText={<ErrorMessage name="password">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>} />
                            <Button type='submit' variant='contained' color='primary' style={btnstyle} data-testid='submitButton'>
                                Sign up</Button>
                            <Typography > Already Registered User ?
                                <Link data-testid='link' to='/login' >
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