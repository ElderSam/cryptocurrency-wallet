import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Box from '@material-ui/core/Box';

import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from './PrivateRoute';

import Header from './components/Header';
import Copyright from './components/Copyright';

import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/UpdateProfile';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>

      <Box mt={8}>
        <Copyright />
      </Box>

    </div>
  );
}

export default App;