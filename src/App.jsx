import './scss/App.scss';
import { Register } from './pages/register'
import { Login } from './pages/login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Dashboard} from './components/dashboard'

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Switch>
          <Route exact path='/' component={Register} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/registerUser' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
