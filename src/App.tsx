import React from 'react';

import { AuthProvider } from "./contexts/AuthContext";
import Header from './components/Header';
import SignUp from './pages/SignUp';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <SignUp />
      </div>
    </AuthProvider>
  );
}

export default App;
