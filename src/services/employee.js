/** ******************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm start
 *
 * Purpose      : Employee CRUD API Integration
 *
 * @description  :modules need to be required before execution of this file
 *
 * @file        : services/employee.js
 * @overview    : api integration using axios
 * @module      : Contains code to send api request to backend 
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 19-07-2021
 ********************************************************************************/
import Axios from "axios";
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("token");
const header = {
  headers: {
    Authorization: `Bearer ${token}`
  }
}

export class Employee {

  createEmployee = (employeeDetails) => {
    return Axios.post("/employees", employeeDetails, header);
  };

  getAllEmployees = () => {
    return Axios.get("/getEmployees", header);
  }

  editEmployee = (empData, employeeId) => {
    return Axios.put(`/updateEmployee/${employeeId}`,
      empData, header);
  }

  getEmployee = (employeeId) => {
    return Axios.get(`/getEmployee/${employeeId}`, header);
  }

  removeEmployee = (employeeId) => {
    return Axios.delete(`/deleteEmployee/${employeeId}`, header);
  }

}