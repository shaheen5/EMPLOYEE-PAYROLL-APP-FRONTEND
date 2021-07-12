import './scss/App.scss';
import { Register } from './pages/register'
import { Login } from './pages/login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App" >
        <Switch>
          <Route path='/registerUser' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
