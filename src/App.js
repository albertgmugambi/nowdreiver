// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [userType, setUserType] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {userType ? <Redirect to={`/${userType}`} /> : <Login setUserType={setUserType} />}
        </Route>
        {userType === 'admin' && (
          <Route path="/admin">
            <AdminDashboard />
          </Route>
        )}
        {userType === 'user' && (
          <Route path="/user">
            <UserDashboard />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default App;

