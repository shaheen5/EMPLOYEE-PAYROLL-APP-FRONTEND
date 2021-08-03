/** ******************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm start
 *
 * Purpose      : create List Employee Details Form UI
 *
 * @description  :modules need to be required before execution of this file
 *
 * @file        : component/listEmployees.jsx
 * @overview    : list employees component
 * @module      : Contains functional component to return employee details tabular format
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 19-07-2021
 ********************************************************************************/
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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  const classes = useStyles();

  const loadEmployees = () => {
    employee.getAllEmployees().then((response) => {
      if (response.data.success === true) {
        setEmployees(response.data.data);
      }
      else {
        toast.error("Some error occurred!");
      }
    }).catch((error) => {
      toast.error(error.message);
    });
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const deleteEmployee = (employeeId) => {
    employee.removeEmployee(employeeId)
      .then((response) => {
        toast.success(response.data.message);
      }).catch(error => {
        toast.error("Employee Details Not Deleted!");
      });
    loadEmployees();
  }

  return (
    <TableContainer component={Paper} style={tableStyle} data-testid="tableContainer">
      <Table className={classes.table} aria-label="customized table" data-testid="table">
        <TableHead>
          <TableRow data-testid="tableRowHeader">
            <StyledTableCell data-testid="firstName">First Name</StyledTableCell>
            <StyledTableCell data-testid="lastName">Last Name</StyledTableCell>
            <StyledTableCell data-testid="gender">Gender</StyledTableCell>
            <StyledTableCell data-testid="salary">Salary</StyledTableCell>
            <StyledTableCell data-testid="department">Department</StyledTableCell>
            <StyledTableCell data-testid="email">Email</StyledTableCell>
            <StyledTableCell data-testid="actions">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="tableBody">
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
              <StyledTableCell >
                <Link to={`/dashboard/updateEmployee/${employee._id}`}><EditIcon style={{ fill: '#000000' }} /></Link>&nbsp;&nbsp;&nbsp;
                <Link onClick={() => { deleteEmployee(employee._id) }}><DeleteIcon style={{ fill: '#000000' }} /></Link>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <ToastContainer
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </TableContainer>
  );
}
