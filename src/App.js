import './App.css';
import { Register } from './pages/register'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      <h1>EMPLOYEE PAYROLL APP</h1>
      <BrowserRouter>
      <Switch>
        <Route path='/registerUser'>
        <Register />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
