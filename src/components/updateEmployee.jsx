import React, { Component } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import { Employee } from '../services/employee';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
const employee = new Employee();

export default class UpdateEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            gender: '',
            salary: '',
            department: '',
            emailId: '',
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

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
                alert(res.data.message);
                this.props.history.push('/dashboard/listEmployees');
            }).catch(error => {
                console.log(error.message);
            })
        }
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
                </Paper>
            </Grid>
        )
    }
}