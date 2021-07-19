import Axios from "axios";
Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
const token = localStorage.getItem("token");

export class Employee {
  createEmployee = (employeeDetails) => {
    return Axios.post("/employees", employeeDetails, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  getAllEmployees = ()=>{
    return Axios.get("/getEmployees",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
