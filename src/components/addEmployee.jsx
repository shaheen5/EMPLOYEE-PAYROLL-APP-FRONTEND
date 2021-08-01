import React from "react";
import { Grid, Paper, TextField, Button, FormLabel } from "@material-ui/core";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Employee } from "../services/employee";
import { useHistory } from "react-router-dom";
import { FormControlLabel, Radio } from '@material-ui/core'
import { RadioGroup } from 'formik-material-ui';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const employee = new Employee();

export const AddEmployee = () => {
  const history = useHistory();
  const paperStyle = { padding: "30px 30px", width: 350, margin: "100px auto" };
  const headerStyle = { margin: 0 };
  const btnstyle = { margin: "15px 0" };
  const initialValues = {
    firstName: "",
    lastName: "",
    gender: "",
    salary: "",
    department: "",
    email: ""
  };
  const onSubmit = (values, props) => {
    const employeeDetails = {
      firstName: values.firstName,
      lastName: values.lastName,
      gender: values.gender,
      salary: values.salary,
      department: values.department,
      emailId: values.email
    };

    employee
      .createEmployee(employeeDetails)
      .then((response) => {
        toast.success(response.data.message);
        setTimeout(()=>{
          history.push("/dashboard/ListEmployees");
        },3000);
      })
      .catch((error) => {
        toast.error(error.message);
      });
    props.resetForm();
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "First Name is too short")
      .matches(/^[a-zA-Z]{3,}$/, "First Name should contain characters")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Last Name is too short")
      .matches(/^[a-zA-Z]{3,}$/, "Last Name should contain characters")
      .required("Required"),
    salary: Yup.number()
      .required("Required"),
    department: Yup.string()
      .matches(/^[a-zA-Z]{2,20}$/, "Min 2 Characters are required")
      .required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
  });
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle} >
        <h2 style={headerStyle} data-testid="heading">
          Employee Details
        </h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form data-testid="form">
              <Field
                as={TextField}
                fullWidth
                name="firstName"
                label="First Name"
                data-testid="firstName"
                placeholder="Enter your first name"
                helperText={
                  <ErrorMessage name="firstName">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                fullWidth
                style={{ padding: "5px" }}
                name="lastName"
                label="Last Name"
                data-testid="lastName"
                placeholder="Enter your last name"
                helperText={
                  <ErrorMessage name="lastName">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                fullWidth
                name="salary"
                label="Salary Amount"
                data-testid="salary"
                helperText={
                  <ErrorMessage name="salary">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                fullWidth
                name="department"
                label="Department"
                data-testid="department"
                helperText={
                  <ErrorMessage name="department">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field
                as={TextField}
                fullWidth
                name="email"
                label="Email"
                data-testid="email"
                placeholder="Enter your email id"
                helperText={
                  <ErrorMessage name="email">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Field component={RadioGroup} row="true" name="gender" >
                <FormLabel style={{ padding: "15px" }} data-testid="gender"> Gender</FormLabel>
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
              </Field>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={btnstyle}
                data-testid="submitButton"
              >
                Submit
              </Button>
              <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};
