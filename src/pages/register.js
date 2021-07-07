import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'

export const Register = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '8px 0' }
    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    }
    const onSubmit = (values, props) => {
        console.log(values);
    }
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "First Name is too short").required("Required"),
        lastName: Yup.string().min(3, "Last Name is too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        password: Yup.string().min(8, "Password should be atleast 8 characters long").required("Required")
    })
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle} src="https://www.exactax.com/track/img/hr.png" />
                    <h2 style={headerStyle}>Registration Form</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !
                    </Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        < Form >
                            <Field as={TextField}
                                fullWidth
                                name="firstName"
                                label='First Name'
                                placeholder="Enter your first name"
                                helperText={<ErrorMessage name="firstName">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>} />
                            <Field as={TextField}
                                fullWidth
                                name="lastName"
                                label='Last Name'
                                placeholder="Enter your last name"
                                helperText={<ErrorMessage name="lastName">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>} />
                            <Field as={TextField}
                                fullWidth
                                name="email"
                                label='Email'
                                placeholder="Enter your email id"
                                helperText={<ErrorMessage name="email">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>} />
                            <Field as={TextField}
                                fullWidth
                                name="password"
                                label='Password'
                                type="password"
                                placeholder="Enter your password"
                                helperText={<ErrorMessage name="password">{ msg => <div style={{ color: 'red' }}>{msg}</div> }</ErrorMessage>} />
                            <Button type='submit' variant='contained' color='primary' style={btnstyle}>Sign up</Button>
                            <Typography > Already Registered User ?
                                <Link href="#" >
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