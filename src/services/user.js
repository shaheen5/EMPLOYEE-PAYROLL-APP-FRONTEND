/** ******************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm start
 *
 * Purpose      : User login and registration API Integration
 *
 * @description  :modules need to be required before execution of this file
 *
 * @file        : services/user.js
 * @overview    : api integration using axios
 * @module      : Contains code to send api request to backend
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 19-07-2021
 ********************************************************************************/
import Axios from "axios";

Axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export class User {
  userLogin = (loginDetails) => {
    return Axios.post("/login", loginDetails);
  };

  userRegistration = (userCredentials) => {
    return Axios.post("/registerUser", userCredentials);
  };
}
