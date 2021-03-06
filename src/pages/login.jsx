/********************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm start
 *
 * Purpose      : create Login Page user interface
 *
 * @description  :modules need to be required before execution of this file
 *
 * @file        : pages/login.jsx
 * @overview    : login page component
 * @module      : Contains functional component to return login Form UI
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 19-07-2021
 ******************************************************************************* */
import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Link, useHistory } from "react-router-dom";
import * as Yup from "yup";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../services/auth';
import { User } from "../services/user";
import '../scss/login.scss';
const user = new User();

export const Login = () => {
  const history = useHistory();
  const paperStyle = {
    padding: 20 ,
    height : "70vh",
    width: 280,
    margin: "30px auto"
  }
  const initialValues = {
    email: "",
    password: "",
  };
  const onSubmit = (values, props) => {
    const loginDetails = {
      emailId: values.email,
      password: values.password,
    };
    user
      .userLogin(loginDetails)
      .then((response) => {
        if (response.data.success === true) {
          localStorage.setItem("token", response.data.data);
          setTimeout(() => {
            auth.login(() => {
              history.push("/dashboard");
            });
          }, 2000);
          toast.success("Login Successfull");
        }
        else {
          toast.error("Some error occured during login");
        }
      }).catch((error) => {
        toast.error("Login Failed !");
      });

    props.resetForm();
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string().min(8, "Enter valid password").required("Required"),
  });
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle} align="center">
        <Grid align="center">
          <h2 data-testid="title" className="header">
            EMPLOYEE PAYROLL
          </h2>
          <Avatar className="avatarStyle" data-testid="logo">
            <LockOutlinedIcon />
          </Avatar>
          <h2 data-testid="signin">Sign In</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form data-testid="form">
            <Field
              as={TextField}
              label="User Email"
              placeholder="Enter email id"
              fullWidth
              name="email"
              data-testid="email"
              helperText={
                <ErrorMessage name="email" >
                  {(msg) => <div className="errorMsg">{msg}</div>}
                </ErrorMessage>
              }
            />
            <Field
              as={TextField}
              name="password"
              label="password"
              placeholder="enter password"
              type="password"
              fullWidth
              data-testid="password"
              helperText={
                <ErrorMessage name="password" >
                  {(msg) => <div className="errorMsg">{msg}</div>}
                </ErrorMessage>
              }
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              className="btnstyle"
              data-testid="submitButton"
              fullWidth
            >
              Sign in
            </Button>
            <Typography>
              Do you have an account ?<Link to="/registerUser">Sign Up</Link>
            </Typography>
            <ToastContainer
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover />
          </Form>
        </Formik>
      </Paper>
    </Grid>
  );
};
