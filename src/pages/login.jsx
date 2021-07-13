import React from 'react'
import { Grid, Paper, Avatar, Button, Typography, TextField } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link,useHistory} from 'react-router-dom';
import * as Yup from 'yup'
import { User } from '../services/user'
const user = new User();

export const Login = () => {
    const history = useHistory();
    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const btnstyle = { margin: '25px 0' }

    const initialValues = {
        email: '',
        password: ''
    }
    const onSubmit = (values, props) => {
        const loginDetails = {
            "emailId": values.email,
            "password": values.password
        }
        user.userLogin(loginDetails)
            .then(response => {
                localStorage.setItem('token', response.data.data);
                history.push('/dashboard');
            }).catch(error => {
                console.log(error.message);
            });

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
                    <h2 data-testid="title" className='header'>EMPLOYEE PAYROLL</h2>
                    <Avatar style={avatarStyle} data-testid='logo'><LockOutlinedIcon /></Avatar>
                    <h2 data-testid='signin'>Sign In</h2>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form data-testid='form'>
                        <Field as={TextField} label='User Email'
                            placeholder='Enter email id'
                            fullWidth
                            name="email"
                            data-testid="email"
                            helperText={<ErrorMessage name="email">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                        />
                        <Field as={TextField}
                            name="password"
                            label='password'
                            placeholder='enter password'
                            type='password'
                            fullWidth
                            data-testid="password"
                            helperText={<ErrorMessage name="password">{msg => <div style={{ color: 'red' }}>{msg}</div>}</ErrorMessage>}
                        />
                        <Button type='submit' color='primary' variant="contained" style={btnstyle}
                            data-testid='submitButton' fullWidth>
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
