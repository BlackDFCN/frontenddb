import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Reservations from './pages/Reservations';
import Tables from './pages/Tables';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reservations" component={Reservations} />
          <Route path="/tables" component={Tables} />
          <Route path="/reports" component={Reports} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
