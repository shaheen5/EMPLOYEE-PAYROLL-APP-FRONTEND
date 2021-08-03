/** ******************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm start
 *
 * Purpose      : create Update Employee Details Form UI
 *
 * @description  :modules need to be required before execution of this file
 *
 * @file        : component/updateEmployee.jsx
 * @overview    : update employee component
 * @module      : Contains class component to return update Form UI
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 19-07-2021
 ********************************************************************************/
import React, { Component } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Employee } from '../services/employee';
import { withRouter } from "react-router-dom";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { toast } from "react-toastify";
const employee = new Employee();

class UpdateEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            salary: '',
            department: '',
            emailId: '',
            snackbaropen: false,
            snackbarmsg: ''
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.snackbarClose = this.snackbarClose.bind(this);
    }
    snackbarClose = (event) => {
        this.setState({ snackbaropen: false });
    };

    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
        if (this.props.match && this.props.match.params.employeeId) {
            const empId = this.props.match.params.employeeId;
            employee.getEmployee(empId)
                .then((response) => {
                    const result = response.data.data;
                    if (response.data.success === true) {
                        this.setState({
                            firstName: result.firstName,
                            lastName: result.lastName,
                            gender: result.gender,
                            salary: result.salary,
                            department: result.department,
                            emailId: result.emailId
                        });
                    }
                    else {
                        alert("employeee record not found!")
                    }
                }).catch((error) => {
                    console.log(error.message);
                });
        }else{
            toast.error("Some error occurred !");
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const empData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            gender: this.state.gender,
            salary: this.state.salary,
            department: this.state.department,
            emailId: this.state.emailId,
        };
        if (this.props.match && this.props.match.params.employeeId) {
            const empId = this.props.match.params.employeeId;
            employee.editEmployee(empData, empId).then((res) => {
                if (res.data.success === true) {
                    this.setState({ snackbaropen: true, snackbarmsg: res.data.message })
                    setTimeout(() => {
                        this.props.history.push('/dashboard/listEmployees');
                    }, 2000);
                }
                else {
                    this.setState({ snackbaropen: true, snackbarmsg: 'Some Error Occured' })
                }
            }).catch(error => {
                this.setState({ snackbaropen: true, snackbarmsg: 'Update Failed!' })
            })
        }
        this.setState({
            firstName: '',
            lastName: '',
            gender: '',
            salary: '',
            department: '',
            emailId: ''
        });
    }
    render() {
        const paperStyle = { padding: "30px 30px", width: 350, margin: "100px auto" };
        const headerStyle = { margin: 0 };
        const btnstyle = { margin: "15px 0" };
        return (
            <Grid>
                <Paper elevation={20} style={paperStyle} >
                    <h2 style={headerStyle} id="heading" className="title">
                        Employee Details
                    </h2><br />
                    <div>
                        <ValidatorForm
                            ref="form"
                            data-testid="form"
                            onSubmit={this.handleSubmit}
                        >
                            <TextValidator
                                fullWidth
                                name="firstName"
                                label="First Name"
                                data-testid="firstName"
                                placeholder="Enter your first name"
                                value={this.state.firstName}
                                onChange={this.onInputChange}
                                validators={['required', 'matchRegexp:^[a-zA-Z]{3,}$']}
                                errorMessages={['this field is required', 'First Name should contain min 3 characters']}
                            />
                            <TextValidator
                                fullWidth
                                name="lastName"
                                label="Last Name"
                                data-testid="lastName"
                                placeholder="Enter your last name"
                                value={this.state.lastName}
                                onChange={this.onInputChange}
                                validators={['required', 'matchRegexp:^[a-zA-Z]{3,}$']}
                                errorMessages={['this field is required', 'Last Name should contain min 3 characters']}

                            />
                            <TextValidator
                                fullWidth
                                name="gender"
                                label="Gender"
                                data-testid="gender"
                                value={this.state.gender}
                                onChange={this.onInputChange}
                                validators={['required', 'matchRegexp:^[a-zA-Z]']}
                                errorMessages={['this field is required', 'Enter valid gender']}
                            />
                            <TextValidator
                                fullWidth
                                name="salary"
                                label="Salary Amount"
                                data-testid="salary"
                                value={this.state.salary}
                                onChange={this.onInputChange}
                                validators={['required', 'matchRegexp:^[0-9]']}
                                errorMessages={['this field is required', 'Enter valid amount']}
                            />
                            <TextValidator
                                fullWidth
                                name="department"
                                label="Department"
                                data-testid="department"
                                value={this.state.department}
                                onChange={this.onInputChange}
                                validators={['required', 'matchRegexp:^[a-zA-Z]{2,}$']}
                                errorMessages={['this field is required', 'Department should contain min 2 characters']}
                            />
                            <TextValidator
                                fullWidth
                                name="emailId"
                                label="Email"
                                data-testid="email"
                                placeholder="Enter your email id"
                                value={this.state.emailId}
                                onChange={this.onInputChange}
                                validators={['required', 'isEmail']}
                                errorMessages={['this field is required', 'Invalid Email']}
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                style={btnstyle}
                                data-testid="submitButton"
                            >
                                Update
                            </Button>
                        </ValidatorForm>
                        <Snackbar
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            open={this.state.snackbaropen}
                            autoHideDuration={2000}
                            onClose={this.snackbarClose}
                            message={this.state.snackbarmsg}
                            action={[
                                <React.Fragment>
                                    <Button color="secondary" size="small" onClick={this.snackbarClose}>
                                        UNDO
                                    </Button>
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={this.snackbarClose}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </React.Fragment>

                            ]}
                        />
                    </div>
                </Paper>
            </Grid>
        )
    }
}
export default withRouter(UpdateEmployee);