import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AdminLayout from './AdminLayout';
import Login from './Components/Login/Login';

import './App.css';

function App() {
  return (
    <div className="">
      <Router>
        <Switch>
          <Route path='/' exact><Login /></Route>
          <Route path='/employee'><AdminLayout /></Route>
          <Route path='/department'><AdminLayout /></Route>
          <Route path='/designation'><AdminLayout /></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
