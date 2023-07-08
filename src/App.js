import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      {/* <Navbar/>   without props */}
      {/* <Navbar title="TextUtils" aboutText="About Us" /> */}
      <Navbar title="TextUtils" />
      <div className="container">
          <TextForm heading="Enter text to Analyze"/>
      </div>

      {/* <About /> */}
    </>
  );
}

export default App;
