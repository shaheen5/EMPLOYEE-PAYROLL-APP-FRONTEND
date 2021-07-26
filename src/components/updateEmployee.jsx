import React, { Component } from "react";
import { Grid, Paper, TextField, Button } from "@material-ui/core";
import { Employee } from '../services/employee';
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
            isError: {
                firstName: '',
                lastName: '',
                gender: '',
                salary: '',
                department: '',
                emailId: '',
            }
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    componentDidMount() {
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
        const empId = this.props.match.params.employeeId;
        employee.editEmployee(empData, empId).then((res) => {
            console.log(res.data.message);
        }).catch(error => {
            console.log(error.message)
        })
    }
    render() {
        const paperStyle = { padding: "30px 30px", width: 350, margin: "100px auto" };
        const headerStyle = { margin: 0 };
        const btnstyle = { margin: "15px 0" };
        return (
            <Grid>
                <Paper elevation={20} style={paperStyle} >
                    <h2 style={headerStyle} data-testid="heading" className="title">
                        Employee Details
                    </h2><br />
                    <form data-testid="form" onSubmit={this.handleSubmit}>
                        <TextField
                            fullWidth
                            name="firstName"
                            label="First Name"
                            data-testid="firstName"
                            placeholder="Enter your first name"
                            value={this.state.firstName}
                            onChange={this.onInputChange}
                        />
                        <TextField
                            fullWidth
                            style={{ padding: "5px" }}
                            name="lastName"
                            label="Last Name"
                            data-testid="lastName"
                            placeholder="Enter your last name"
                            value={this.state.lastName}
                            onChange={this.onInputChange}
                        />
                        <TextField
                            fullWidth
                            name="gender"
                            label="Gender"
                            data-testid="gender"
                            value={this.state.gender}
                            onChange={this.onInputChange}
                        />
                        <TextField
                            fullWidth
                            name="salary"
                            label="Salary Amount"
                            data-testid="salary"
                            value={this.state.salary}
                            onChange={this.onInputChange}
                        />
                        <TextField
                            fullWidth
                            name="department"
                            label="Department"
                            data-testid="department"
                            value={this.state.department}
                            onChange={this.onInputChange}
                        />
                        <TextField
                            fullWidth
                            name="email"
                            label="Email"
                            data-testid="email"
                            placeholder="Enter your email id"
                            value={this.state.emailId}
                            onChange={this.onInputChange}
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
                    </form>
                </Paper>
            </Grid>
        )
    }
}