import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type, time_val=2000) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, time_val);
  }

  const toggleMode = () =>{
    if (mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success', 5000);
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'black';
      showAlert('Dark mode has been enabled', 'success', 5000);
    }
  }

  return (
    <>
      {/* <Navbar/>   without props */}
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container">
          <TextForm heading="Enter text to Analyze" mode={mode} showAlert={showAlert}/>
      </div>

      {/* <About /> */}
    </>
  );
}

export default App;
