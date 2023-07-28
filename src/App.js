import './App.css';
import About from './components/About'
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link } from 'react-router-dom';

import { Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, time_val = 2000) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, time_val);
  };

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success', 5000);
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enabled', 'success', 5000);
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <About mode={mode} toggleMode={toggleMode}/> */}
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route
              exact path="/"
              element={
                <TextForm
                  heading="Enter text to Analyze"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route
              exact path="/about"
              element={<About mode={mode} toggleMode={toggleMode} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
