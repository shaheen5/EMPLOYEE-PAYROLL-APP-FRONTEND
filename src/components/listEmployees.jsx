import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Employee } from '../services/employee'
const employee = new Employee();

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
const tableStyle = {
  padding: "30px 20px",
  width: 1200, margin: "80px auto",
  elevation: 20
}

export const ListEmployees = () => {
  let [employees, setEmployees] = useState([]);
  useEffect(() => {
    employee.getAllEmployees().then((response) => {
      if (response.data.success === true) {
        setEmployees(response.data.data);
      }
      else {
        console.log("Some error occurred!");
      }
    }).catch((error) => {
      console.log(error.message);
    })
  },[]);

  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={tableStyle}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>First Name</StyledTableCell>
            <StyledTableCell >Last Name</StyledTableCell>
            <StyledTableCell >Gender</StyledTableCell>
            <StyledTableCell >Salary</StyledTableCell>
            <StyledTableCell >Department</StyledTableCell>
            <StyledTableCell >Email</StyledTableCell>
            <StyledTableCell >Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <StyledTableRow >
              <StyledTableCell component="th" scope="row">
                {employee.firstName}
              </StyledTableCell>
              <StyledTableCell >{employee.lastName}</StyledTableCell>
              <StyledTableCell >{employee.gender}</StyledTableCell>
              <StyledTableCell >{employee.salary}</StyledTableCell>
              <StyledTableCell >{employee.department}</StyledTableCell>
              <StyledTableCell >{employee.emailId}</StyledTableCell>
              <StyledTableCell ></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
