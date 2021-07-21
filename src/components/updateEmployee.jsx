import React, { useState, useEffect } from "react";
import { Grid, Paper, TextField, Button, FormLabel } from "@material-ui/core";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Employee } from "../services/employee";
import { useHistory, useParams } from "react-router-dom";
import { FormControlLabel, Radio } from '@material-ui/core'
import { RadioGroup } from 'formik-material-ui';

const employee = new Employee();

export const UpdateEmployee = () => {
    const history = useHistory();
    const { employeeId } = useParams();
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
    const [empData, setEmployee] = useState(initialValues);

    useEffect(() => {
        employee.getEmployee(employeeId).then((response) => {
            setEmployee(response.data.data);
        }).catch(error => {
            console.log(error);
        });
    });

    const onSubmit = (event, props) => {
        event.preventDefault();
        employee
            .editEmployee(empData, employeeId)
            .then((response) => {
                setEmployee(response.data.data);
                alert(response.data.message);
                history.push("/dashboard/ListEmployees");
            })
            .catch((error) => {
                console.log(error);
            });
        props.resetForm();
    };
    let {firstName,lastName,gender,salary,department,emailId}=empData;

    const onInputChange = (e) => {
        console.log(empData);
        setEmployee({...empData, [e.target.name]: e.target.value });
        console.log(empData);
    }

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
                                value={firstName}
                                onChange={e => {onInputChange(e)}}
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
                                value={lastName}
                                onChange={e => onInputChange(e)}
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
                                value={salary}
                                onChange={e => onInputChange(e)}
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
                                value={department}
                                onChange={e => onInputChange(e)}
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
                                value={emailId}
                                onChange={e => onInputChange(e)}
                                helperText={
                                    <ErrorMessage name="email">
                                        {(msg) => <div style={{ color: "red" }}>{msg}</div>}
                                    </ErrorMessage>
                                }
                            />
                            <Field component={RadioGroup} row="true" name="gender">
                                <FormLabel style={{ padding: "12px", align: 'left' }}> Gender</FormLabel>
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
                            >Update
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    );
};
