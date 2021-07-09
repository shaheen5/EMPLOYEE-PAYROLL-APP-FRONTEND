import React from 'react'
import { Grid, Paper, Avatar, Button, Typography, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import {userLogin} from '../services/user'

export const Login = () => {
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '25px 0' }
 
    const initialValues = {
        email: '',
        password: ''
    }
    const onSubmit = (values, props) => {
        const loginDetails = {
            "emailId":values.email,
            "password":values.password
        }
        userLogin(loginDetails);
        props.resetForm();
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Enter valid email").required("Required"),
        password: Yup.string().min(8, "Enter valid password").required("Required")
    })
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <h2>EMPLOYEE PAYROLL</h2>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form>
                        <Field as={TextField} label='User Email'
                            placeholder='Enter email id'
                            fullWidth
                            name="email"
                            helperText={<ErrorMessage name="email">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                        />
                        <Field as={TextField} label='Password'
                            name="password"
                            placeholder='Enter password'
                            type='password'
                            fullWidth
                            helperText={<ErrorMessage name="password">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                        />
                        <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>
                            Sign in</Button>
                        <Typography > Do you have an account ?
                            <Link to='/registerUser' >
                                Sign Up
                            </Link>
                        </Typography>
                    </Form>
                </Formik>
            </Paper>
        </Grid>
    )
}
