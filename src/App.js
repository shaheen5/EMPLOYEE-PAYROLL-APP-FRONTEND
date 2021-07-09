import './scss/App.scss';
import { Register } from './pages/register'
import { Login } from './pages/login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Switch>
          <Route path='/registerUser'>
            <Register />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
