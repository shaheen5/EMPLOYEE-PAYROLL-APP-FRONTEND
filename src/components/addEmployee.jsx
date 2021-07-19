import React from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Employee } from "../services/employee";
import { useHistory } from "react-router-dom";
const employee = new Employee();

export const AddEmployee = () => {
  const history = useHistory();
  const paperStyle = { padding: "30px 20px", width: 300, margin: "120px auto" };
  const headerStyle = { margin: 0 };
  const btnstyle = { margin: "15px 0" };
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
  const onSubmit = (values, props) => {
    const employeeDetails = {
      firstName: values.firstName,
      lastName: values.lastName,
      emailId: values.email,
      password: values.password,
    };
    console.log(employeeDetails);
    employee
      .createEmployee(employeeDetails)
      .then((response) => {
        alert(response.data.message);
        history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
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
    email: Yup.string().email("Enter valid email").required("Required"),
    password: Yup.string()
      .min(8, "Password should be atleast 8 characters long")
      .matches(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
        "Password should conatin letters,numbers & special characters"
      )
      .required("Required"),
  });
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
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
              <Field
                as={TextField}
                fullWidth
                name="password"
                label="Password"
                type="password"
                data-testid="password"
                placeholder="Enter your password"
                helperText={
                  <ErrorMessage name="password">
                    {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                  </ErrorMessage>
                }
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={btnstyle}
                data-testid="submitButton"
              >
                Submit
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};
