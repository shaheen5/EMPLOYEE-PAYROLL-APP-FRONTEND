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
