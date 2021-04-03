import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AuthProvider } from "./contexts/AuthContext";
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </AuthProvider>
      </Router>

    </div>
  );
}

export default App;