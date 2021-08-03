/** ******************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm start
 *
 * Purpose      : main component of our application
 *
 * @description  :modules need to be required before execution of this file
 *
 * @file        : src/App.jsx
 * @overview    : main component which contains child components
 * @module      :  app component contains all child components and route
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 19-07-2021
 ******************************************************************************* */
import "./scss/App.scss";
import { Register } from "./pages/register";
import { Login } from "./pages/login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/dashboard";
import { AddEmployee } from "./components/addEmployee";
import { ListEmployees } from "./components/listEmployees";
import UpdateEmployee from "./components/updateEmployee";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/registerUser" component={Register} />
          <Route path="/login" component={Login} />
        </Switch>
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/dashboard/addEmployee" component={AddEmployee} />
        <ProtectedRoute path="/dashboard/listEmployees" component={ListEmployees} />
        <ProtectedRoute path="/dashboard/updateEmployee/:employeeId" component={UpdateEmployee} />
      </div>
    </BrowserRouter>
  );
}

export default App;
