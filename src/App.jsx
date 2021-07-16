/**********************************************************************************************************
 *  Execution    : 1. Default node with npm   cmd> npm server.js
                   2. If nodemon installed    cmd> nodemon start
 *
 * Purpose      : main component of our application
 *
 * @description  :modules need to be required before execution of this file  
 *
 * @file        : src/App.jsx
 * @overview    : 
 * @module      :  
 * @author      : Shaheen M.
 * @version     : 1.0
 * @since       : 29-06-2021
 **********************************************************************************************************/
import './scss/App.scss';
import { Register } from './pages/register'
import { Login } from './pages/login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/dashboard'
import { AddEmployee } from './components/addEmployee'

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Switch>
          <Route exact path='/' component={Register} />
          
          <Route path='/registerUser' component={Register} />
          <Route path='/login' component={Login} />

        </Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/dashboard/addEmployee' component={AddEmployee} />
      </div>
    </BrowserRouter>
  );
}

export default App;
