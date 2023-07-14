import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'


function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () =>{
    if (mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = 'black';
    }
  }

  return (
    <>
      {/* <Navbar/>   without props */}
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
          <TextForm heading="Enter text to Analyze" mode={mode}/>
      </div>

      {/* <About /> */}
    </>
  );
}

export default App;
